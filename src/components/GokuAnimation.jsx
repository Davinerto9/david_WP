import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'motion/react';
import {
  auraFlame,
  backgroundBurst,
  orbSpin,
  brushStrokeMove,
  bgColorShift,
  crossBeamFlicker,
  spikyAuraPulse,
  flareSpin,
  shakeCharge,
} from '../styles/styles';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

// Number of flares in the rotating ring around the orb, evenly spaced.
const BEAM_COUNT = 8;
const BEAM_ANGLES = Array.from({ length: BEAM_COUNT }, (_, i) => (360 / BEAM_COUNT) * i);

function GokuAnimation({ onComplete }) {
  const [isHolding, setIsHolding] = useState(false);
  const [charge, setCharge] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [isBlasting, setIsBlasting] = useState(false);

  // Locks the image + aura + orb container to the real aspect ratio of the artwork,
  // so percentage-based positions inside it always line up with the character
  // regardless of viewport size/shape (fixes the orb drifting on resize).
  const [aspectRatio, setAspectRatio] = useState(0.62);

  // Sync ref structure to allow global listener sweeps to see real-time updates
  const stateRef = useRef({ charge: 0, isFull: false, isBlasting: false, isHolding: false });
  useEffect(() => {
    stateRef.current = { charge, isFull, isBlasting, isHolding };
  }, [charge, isFull, isBlasting, isHolding]);

  const chargeTimer = useRef(null);
  const loopTimer = useRef(null);

  const chargeAudio = useRef(null);
  const drainAudio = useRef(null);
  const blastAudio = useRef(null);

  const baseUrl = import.meta.env.BASE_URL || '/';
  const gokuStill = `${baseUrl}goku-still.png`;
  const gokuCharging = `${baseUrl}goku-charge.png`;
  const gokuFiring = `${baseUrl}goku-firing.png`;

  const sfxCharge = `${baseUrl}kamehameha_charge.mp3`;
  const sfxDrain = `${baseUrl}kamehameha_drain.mp3`;
  const sfxBlast = `${baseUrl}kamehameha_blast.mp3`;

  useEffect(() => {
    chargeAudio.current = new Audio(sfxCharge);
    drainAudio.current = new Audio(sfxDrain);
    blastAudio.current = new Audio(sfxBlast);

    return () => {
      chargeAudio.current?.pause();
      drainAudio.current?.pause();
      blastAudio.current?.pause();
      clearInterval(chargeTimer.current);
      clearInterval(loopTimer.current);
    };
  }, []);

  // Continuous sound loop algorithm for handling max capacity states
  const startAudioLoop = () => {
    clearInterval(loopTimer.current);
    if (!chargeAudio.current) return;
    const loopStartTime = 6.4; // Triggers short loop on final sound seconds segment

    loopTimer.current = setInterval(() => {
      if (stateRef.current.isHolding && stateRef.current.isFull && chargeAudio.current) {
        if (chargeAudio.current.currentTime >= chargeAudio.current.duration - 0.2) {
          chargeAudio.current.currentTime = loopStartTime;
        }
      } else {
        clearInterval(loopTimer.current);
      }
    }, 100);
  };

  useEffect(() => {
    if (isHolding && !isBlasting) {
      drainAudio.current?.pause();
      if (chargeAudio.current) {
        chargeAudio.current.volume = 0.5;
        if (charge > 0) {
          chargeAudio.current.currentTime = (charge / 100) * 7;
        } else {
          chargeAudio.current.currentTime = 0;
        }
        chargeAudio.current.play().catch(() => {});
      }

      clearInterval(chargeTimer.current);
      chargeTimer.current = setInterval(() => {
        setCharge((prev) => {
          if (prev >= 100) {
            clearInterval(chargeTimer.current);
            setIsFull(true);
            startAudioLoop();
            return 100;
          }
          return prev + 0.5;
        });
      }, 35);
    } else {
      // Original reverse/drain behavior: released before 100%, charge always
      // falls back to 0 -- no lock, no fail state.
      clearInterval(chargeTimer.current);
      clearInterval(loopTimer.current);

      if (!isBlasting) {
        chargeAudio.current?.pause();

        if (charge > 2 && drainAudio.current) {
          drainAudio.current.volume = 0.4;
          if (Number.isFinite(drainAudio.current.duration)) {
            // Audio metadata has loaded, so we can line up the drain clip
            // with how much charge is left.
            drainAudio.current.currentTime = Math.max(0, drainAudio.current.duration - ((charge / 100) * drainAudio.current.duration));
          } else {
            // Metadata not loaded yet (e.g. released right after page load) --
            // `duration` would be NaN here, and setting currentTime to NaN
            // throws. Just start the clip from the beginning instead.
            drainAudio.current.currentTime = 0;
          }
          drainAudio.current.play().catch(() => {});
        }

        chargeTimer.current = setInterval(() => {
          setCharge((prev) => {
            if (prev <= 0) {
              clearInterval(chargeTimer.current);
              setIsFull(false);
              drainAudio.current?.pause();
              return 0;
            }
            return prev - 2;
          });
        }, 25);
      }
    }
    return () => {
      clearInterval(chargeTimer.current);
      clearInterval(loopTimer.current);
    };
  }, [isHolding, isBlasting]);

  useEffect(() => {
    const GlobalReleaseTrigger = () => {
      if (stateRef.current.isHolding) {
        setIsHolding(false);

        if (stateRef.current.isFull && !stateRef.current.isBlasting) {
          setIsBlasting(true);
          chargeAudio.current?.pause();
          drainAudio.current?.pause();

          if (blastAudio.current) {
            blastAudio.current.volume = 0.7;
            blastAudio.current.currentTime = 0;
            blastAudio.current.play().catch(() => {});
          }

          setTimeout(() => {
            onComplete();
          }, 11000); // 11-second transition freeze window to match full track sfx output trail
        }
      }
    };

    window.addEventListener('mouseup', GlobalReleaseTrigger);
    window.addEventListener('touchend', GlobalReleaseTrigger);
    return () => {
      window.removeEventListener('mouseup', GlobalReleaseTrigger);
      window.removeEventListener('touchend', GlobalReleaseTrigger);
    };
  }, []);

  // Shake amplitude tracks `charge` directly, so it tapers down smoothly as the
  // charge drains after an early release instead of cutting off abruptly.
  const shakeAmount = charge > 0 ? charge / 8 : 0;

  const currentGokuImage = isBlasting ? gokuFiring : (isHolding || charge > 0) ? gokuCharging : gokuStill;

  const showEnergyFx = (isHolding || charge > 0) && !isBlasting;
  const showBeams = !isBlasting && charge > 15;
  const beamStrength = Math.min(1, charge / 100);
  const bgIntensity = isHolding ? Math.min(0.9, 0.25 + charge / 140) : 0.15;

  return (
    <Box
      onMouseDown={() => !isBlasting && setIsHolding(true)}
      onTouchStart={() => !isBlasting && setIsHolding(true)}
      sx={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 9999, overflow: 'hidden', userSelect: 'none',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        background: 'radial-gradient(circle, #1a0f00 0%, #080300 60%, #000000 100%)',
        animation: isHolding ? `${backgroundBurst} 3s infinite ease-in-out` : 'none',
      }}
    >
      {/* Animated diagonal speed-line background: black + blue only, layered
          stripes at different scales for a hand-brushed look, plus a slow,
          independent color-drift so the blues breathe rather than just scroll. */}
      <Box
        sx={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          backgroundImage: `repeating-linear-gradient(115deg, rgba(4,8,18,0.55) 0px, rgba(4,8,18,0.55) 4px, transparent 4px, transparent 20px),
                             repeating-linear-gradient(115deg, rgba(0,110,255,0.22) 0px, rgba(0,110,255,0.22) 2px, transparent 2px, transparent 36px),
                             repeating-linear-gradient(115deg, rgba(130,225,255,0.12) 0px, rgba(130,225,255,0.12) 1px, transparent 1px, transparent 54px)`,
          backgroundSize: '500px 500px, 380px 380px, 300px 300px',
          animation: `${brushStrokeMove} 8s linear infinite, ${bgColorShift} 10s ease-in-out infinite`,
          opacity: bgIntensity,
          mixBlendMode: 'screen',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Extended ink-brush cross, static rotation, echoes the manga-style cross slash */}
      <Box
        sx={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 0, pointerEvents: 'none',
          width: '200vmax', height: '10px', transform: 'translate(-50%, -50%) rotate(24deg)',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 15%, rgba(0,0,0,0.55) 85%, transparent 100%)',
          opacity: isHolding ? Math.min(0.6, 0.15 + charge / 160) : 0.1,
          transition: 'opacity 0.3s ease',
        }}
      />
      <Box
        sx={{
          position: 'absolute', top: '50%', left: '50%', zIndex: 0, pointerEvents: 'none',
          width: '200vmax', height: '8px', transform: 'translate(-50%, -50%) rotate(-24deg)',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 15%, rgba(0,0,0,0.45) 85%, transparent 100%)',
          opacity: isHolding ? Math.min(0.55, 0.12 + charge / 170) : 0.08,
          transition: 'opacity 0.3s ease',
        }}
      />

      <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh', width: '100%', zIndex: 1 }}>

        {/* Aspect-ratio-locked frame: this box's shape always matches the rendered
            image exactly (no letterboxing gap), so every % position inside it
            (aura, orb, beams) stays pinned to the same spot on Goku at any screen size. */}
        <Box sx={{ position: 'relative', height: '100%', width: 'auto', maxWidth: '100%', aspectRatio: aspectRatio }}>

          {/* Spiky yellow aura -- static centering wrapper, animated child only pulses scale/opacity */}
          {showEnergyFx && (
            <Box
              sx={{
                position: 'absolute', top: '38%', left: '50%', zIndex: 0,
                transform: 'translate(-50%, -50%)', pointerEvents: 'none',
                width: `${60 + charge * 0.5}%`, height: `${75 + charge * 0.5}%`,
              }}
            >
              {/* Can be useful on the future a spiky aura. */}
              {/* <Box
                sx={{
                  width: '100%', height: '100%',
                  animation: `${spikyAuraPulse} 1.4s ease-in-out infinite`,
                  opacity: Math.min(1, 0.35 + charge / 110),
                }}
              >
                <svg viewBox="0 0 200 260" width="100%" height="100%" style={{ overflow: 'visible' }}>
                  <defs>
                    <radialGradient id="spikyAuraGrad" cx="50%" cy="55%" r="60%">
                      <stop offset="0%" stopColor="#fff7cc" stopOpacity="0.9" />
                      <stop offset="45%" stopColor="#ffdd33" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#ff9500" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M100,255 L60,180 L35,220 L28,140 L4,165 L18,90 L0,95 L38,20 L45,55 L70,0 L78,45 L100,10 L108,50 L128,0 L132,48 L160,10 L150,65 L182,45 L160,100 L196,110 L155,135 L182,175 L142,155 L150,215 L118,170 L100,255 Z"
                    fill="url(#spikyAuraGrad)"
                    style={{ filter: 'blur(2px)' }}
                  />
                </svg>
              </Box> */}
            </Box>
          )}

          {showEnergyFx && (
            <Box
              sx={{
                position: 'absolute', top: '50%', left: '50%',
                width: `${280 + charge * 4}px`, height: `${400 + charge * 5}px`,
                zIndex: 1, transformOrigin: 'center center',
                background: 'radial-gradient(ellipse at bottom, #ffffff 0%, #ffea00 35%, #ff6a00 65%, rgba(0,0,0,0) 85%)',
                borderRadius: '50% 50% 25% 25%', animation: `${auraFlame} 0.12s infinite linear`,
              }}
            />
          )}

          <Box
            component="img"
            src={currentGokuImage}
            alt="Goku Core Layer"
            onLoad={(e) => {
              const { naturalWidth, naturalHeight } = e.target;
              if (naturalWidth && naturalHeight) {
                setAspectRatio(naturalWidth / naturalHeight);
              }
            }}
            sx={{
              height: '100%', width: '100%', objectFit: 'contain', zIndex: 2, display: 'block', position: 'relative',
              filter: isHolding && !isBlasting ? `brightness(${1 + charge / 110}) drop-shadow(0 0 15px rgba(255,165,0,0.3))` : 'none',
              transformOrigin: 'center center',
              '--shake-amount': `${shakeAmount}px`,
              // '--charge-scale': isHolding && !isBlasting ? 1 + charge / 550 : 1, //previous version
              '--charge-scale': isBlasting ? 1.5 : isHolding ? 1 + charge / 550 : 1, // with scaling when firing because image is kinda small
              animation: charge > 0 ? `${shakeCharge} 0.4s linear infinite` : 'none',
            }}
          />

          {showEnergyFx && (
            <Box
              sx={{
                position: 'absolute', zIndex: 3, pointerEvents: 'none', borderRadius: '50%',
                top: '41%', left: '33.3%',
                animation: `${orbSpin} 0.06s infinite linear`,
                boxShadow: `0 0 ${15 + charge * 0.6}px #00f6ff, 0 0 ${35 + charge * 1.8}px #0055ff`,
                width: `${15 + charge * 1.7}px`, height: `${15 + charge * 1.7}px`,
                background: 'radial-gradient(circle, #ffffff 35%, #a6f2ff 65%, #0055ff 100%)',
              }}
            />
          )}

          {/* Cross-beam flares: a ring of 6, slim at the base (orb) and flaring
              out wider toward the tip via a tapered clip-path. The ring itself
              spins continuously (CSS animation on a static-anchored wrapper),
              speeding up as charge builds. Each flare's angular offset within
              the ring is a fixed, non-animated transform, so it never fights
              the spin -- and the spin never fights the anchor position. */}
          {showBeams && (
            <Box sx={{ position: 'absolute', top: '41%', left: '33.3%', zIndex: 2, pointerEvents: 'none', width: 0, height: 0 }}>
              <Box
                sx={{
                  position: 'absolute', top: 0, left: 0,
                  animation: `${flareSpin} ${Math.max(1.2, 4 - beamStrength * 2.6)}s linear infinite`,
                }}
              >
                {BEAM_ANGLES.map((angle, i) => (
                  <Box
                    key={angle}
                    sx={{
                      position: 'absolute', top: 0, left: 0,
                      width: '110vmax', height: `${12 + beamStrength * 55}px`,
                      transformOrigin: 'left center',
                      transform: `rotate(${angle}deg)`,
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%', height: '100%',
                        clipPath: 'polygon(0% 46%, 100% 4%, 100% 96%, 0% 54%)',
                        background: 'linear-gradient(90deg, rgba(255,255,255,0.98) 0%, rgba(200,245,255,0.95) 6%, rgba(120,220,255,0.85) 20%, rgba(0,140,255,0.55) 50%, rgba(0,70,255,0) 85%)',
                        animation: `${crossBeamFlicker} ${0.5 + (i % 3) * 0.15}s ease-in-out infinite`,
                        animationDelay: `${i * 0.05}s`,
                        opacity: beamStrength,
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      {!isBlasting && (
        <Box sx={{ zIndex: 5, textAlign: 'center', width: '320px', mt: 6 }}>
          <MotionTypography
            variant="h6"
            sx={{
              color: isFull ? '#00f6ff' : (!isHolding && charge > 0) ? '#ffb347' : '#ffffff',
              fontWeight: 900, mb: 3,
              letterSpacing: 2, textTransform: 'uppercase',
              textShadow: isFull ? '0 0 15px #00f6ff' : (!isHolding && charge > 0) ? '0 0 15px #ffb347' : 'none',
              fontFamily: "'Permanent Marker', 'cursive'"
            }}
            animate={
              isFull ? { scale: [1, 1.06, 1] } :
              (!isHolding && charge > 0) ? { opacity: [0.5, 1, 0.5] } :
              { opacity: [0.5, 1, 0.5] }
            }
            transition={
              isFull ? { repeat: Infinity, duration: 0.25 } :
              (!isHolding && charge > 0) ? { repeat: Infinity, duration: 0.6 } :
              { repeat: Infinity, duration: 1.5 }
            }
          >
            {isFull
              ? 'RELEASE TO BLAST!!!'
              : isHolding
                ? `GATHERING KI (${Math.round(charge)}%)`
                : charge > 0
                  ? `HOLD TO KEEP CHARGING (${Math.round(charge)}%)`
                  : 'HOLD TO AWAKEN ENERGY'}
          </MotionTypography>
        </Box>
      )}

      <AnimatePresence>
        {isBlasting && (
          <MotionBox
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 2.5, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            sx={{
              position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'radial-gradient(circle, #ffffff 20%, #9ef2ff 50%, #0044ff 85%)',
              zIndex: 10, pointerEvents: 'none', transformOrigin: 'center center'
            }}
          />
        )}
      </AnimatePresence>
    </Box>
  );
}

export default GokuAnimation;