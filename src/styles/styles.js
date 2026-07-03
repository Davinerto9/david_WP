import { keyframes } from '@mui/system';

export const auraFlame = keyframes`
  0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.6; filter: blur(25px); }
  50% { transform: translate(-50%, -50%) scale(1.1) rotate(3deg); opacity: 0.9; filter: blur(15px); }
  100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); opacity: 0.6; filter: blur(25px); }
`;

export const backgroundBurst = keyframes`
  0% { background-size: 100% 100%; filter: saturate(1) contrast(1); }
  50% { background-size: 130% 130%; filter: saturate(1.4) contrast(1.1); }
  100% { background-size: 100% 100%; filter: saturate(1) contrast(1); }
`;

export const orbSpin = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(0.9); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.1); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(0.9); }
`;

// Moving diagonal speed-line background (evokes the brush-stroke reference art).
// No translate here on purpose -- this is applied straight to a full-bleed box
// that has no other positioning transform to conflict with.
export const brushStrokeMove = keyframes`
  0% { background-position: 0% 0%, 0% 0%, 0% 0%; }
  100% { background-position: 500px 500px, -380px 380px, 260px -260px; }
`;

// Slow, smooth color drift for the background brush strokes -- shifts hue and
// brightness gently so the blues breathe over time instead of just scrolling.
// Kept as a separate animation from brushStrokeMove (both run on the same
// element via a comma-separated `animation` value) so the position-loop and
// the color-loop can have different durations/easings without fighting.
export const bgColorShift = keyframes`
  0% { filter: hue-rotate(0deg) brightness(1); }
  50% { filter: hue-rotate(-14deg) brightness(1.18); }
  100% { filter: hue-rotate(0deg) brightness(1); }
`;

// Flicker for the cross-beams shooting out of the charging orb. Only touches
// opacity/scaleX -- the rotation/placement of each beam is set once, statically,
// on a separate wrapper element so this never fights that transform.
export const crossBeamFlicker = keyframes`
  0%, 100% { opacity: 0.35; transform: scaleX(0.88); }
  50% { opacity: 1; transform: scaleX(1.12); }
`;

// Pulse for the spiky yellow aura shape. Same rule: no translate, since the
// centering is handled by a static wrapper.
export const spikyAuraPulse = keyframes`
  0% { opacity: 0.55; transform: scale(0.95) rotate(-1deg); }
  50% { opacity: 0.95; transform: scale(1.07) rotate(1deg); }
  100% { opacity: 0.55; transform: scale(0.95) rotate(-1deg); }
`;

// Continuous rotation for the ring of cross-beam flares around the orb.
export const flareSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// Goku's charging shake, driven entirely by CSS custom properties
// (--shake-amount, --charge-scale) instead of a JS-computed animate target.
// This is deliberate: React state (charge) updates ~30x/second while holding,
// and re-computing a Framer Motion `animate` array that often causes the tween
// to restart every single tick -- which can make the shake look like it
// randomly freezes. A CSS custom property can change value without restarting
// an already-running CSS animation, so this stays smooth no matter how often
// `charge` ticks.
export const shakeCharge = keyframes`
  0% { transform: translate(0px, 0px) scale(var(--charge-scale, 1)); }
  25% { transform: translate(calc(var(--shake-amount, 0px) * -1), calc(var(--shake-amount, 0px) * 0.77)) scale(var(--charge-scale, 1)); }
  50% { transform: translate(var(--shake-amount, 0px), calc(var(--shake-amount, 0px) * -0.77)) scale(var(--charge-scale, 1)); }
  75% { transform: translate(calc(var(--shake-amount, 0px) * -1), 0px) scale(var(--charge-scale, 1)); }
  100% { transform: translate(0px, 0px) scale(var(--charge-scale, 1)); }
`;