import { Container, Typography, Box, Card, Toolbar, GlobalStyles, CssBaseline, IconButton } from "@mui/material"
import React from "react"
import { useState, useEffect, useRef } from "react"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import { projects, videogames, inspirations } from "../utils/data"
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import MailIcon from '@mui/icons-material/Mail';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GameCard from "../components/GameCard"
import InspirationsStrip from "../components/InspirationsStrip"
import HobbiesGrid from "../components/HobbiesGrid"
import MusicGrid from "../components/MusicGrid"
import Section from "../components/Section"
import AboutMe from "../components/AboutMe"
//I dont know if it's correct to put Tech stack is toooooo much corporate crap, projects I think should stay...
//Things in mind: Goku addition, wild effects, music, a super advanced NON corporate dashboard, something creative with transitions and stuff...

export default function MainPage(){

    const fullText = "Hello this is David!";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText("");

        const typingInterval = setInterval(() => {
            setDisplayedText((currentText) => {
                if (currentText.length < fullText.length) {
                    return fullText.slice(0, currentText.length + 1);
                } else {
                    clearInterval(typingInterval);
                    return currentText;
                }
            });
        }, 120);

        return () => clearInterval(typingInterval); 
    }, []);

    //better than using native webAPI setInterval, useRef cooks with the same logic for carrusel loop
    const intervalRef = useRef(null);

    const startCarousel = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % videogames.length);
        }, 3000);
    };

    useEffect(() => {
        startCarousel();

        return () => clearInterval(intervalRef.current);
    }, []);

    //old version very ineffective.
    // useEffect(() => {
    //     const carouselInterval = setInterval(() => {
    //         setIndex((currentIndex) => (currentIndex + 1) % videogames.length);
    //     }, 1000);

    //     return () => clearInterval(carouselInterval);
    // }, []);
    //non loopable ver.
    // useEffect(() => {
    //     const carouselInterval = setInterval(() => {
    //         setIndex((currentIndex) => {
    //         if (currentIndex < videogames.length - 1) {
    //             return currentIndex + 1;
    //         }

    //         clearInterval(carouselInterval);
    //         return currentIndex;
    //         });
    //     }, 1000);

    //     return () => clearInterval(carouselInterval);
    // }, []);

    const next = () => {
        setIndex((prev) => (prev + 1) % videogames.length);
        startCarousel()
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + videogames.length) % videogames.length);
        startCarousel()
    };

    return(
        <>
            {/* Limpia márgenes ocultos y estilos nativos del navegador */}
            <CssBaseline />

            {/* animation injection globally*/}
            <GlobalStyles
                styles={{
                    '@keyframes gradientMovement': {
                        '0%': { backgroundPosition: '0% 50%' },
                        '50%': { backgroundPosition: '100% 50%' },
                        '100%': { backgroundPosition: '0% 50%' },
                    },
                    'html, body, #root': {
                        margin: 0,
                        padding: 0,
                        width: '100%',
                        minHeight: '100vh',
                        overflowX: 'hidden', //no more horizontal leak
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        msOverflowStyle: 'none', 
                        scrollbarWidth: 'none', 
                    },
                }}
            />

            <Container 
                maxWidth={false} 
                disableGutters
                sx={{ 
                    width: "100vw", 
                    minHeight: "100vh",
                    display: "grid", 
                    gap: 2, 
                    padding: 3, // Añade espacio interno para que el contenido no pegue a los bordes
                    background: 'linear-gradient(90deg, rgba(164, 112, 219, 1) 0%, rgba(151, 126, 156, 1) 50%, rgba(83, 175, 237, 1) 100%)',
                    backgroundSize: '400% 400%', // Agranda el fondo para permitir el desplazamiento del color
                    animation: 'gradientMovement 15s ease infinite', // Aplica la animación continua
                }}
            >
                <Navbar/>
                <Typography 
                    variant="h4" 
                    align="center" 
                    sx={{
                        fontFamily: 'Inconsolata', 
                        mt: 4,
                        fontWeight: 'bold',
                        display: 'inline-block',
                        width: '100%',
                        // Añade una barra parpadeante al final del texto imitando una terminal
                        '&::after': {
                            content: '":)"',
                            animation: 'blink 0.8s infinite',
                            marginLeft: '4px',
                            color: '#83afed'
                        },
                        '@keyframes blink': {
                            '0%, 100%': { opacity: 1 },
                            '50%': { opacity: 0 }
                        }
                    }}
                >
                    {displayedText}
                </Typography>
                <Section index={1} title="Who am I?" tinted id="me">
                    <AboutMe />
                </Section>
                <Typography align="center" variant="h4" sx={{fontFamily: 'Edu NSW ACT Cursive'}}>
                    A little bit about Myself...
                </Typography>
                <Section index={2} title="My Inspirations" id="inspirations"  intro="Role models I've built a big part of my personality around — for their efficiency and their impact on their respective works.">
                    <InspirationsStrip data={inspirations}/>
                </Section>
                <Section index={3} title="My Hobbies" tinted id="hobbies" intro="What I do with my free time — and the burning passion behind it.">
                    <HobbiesGrid />
                </Section>
                <Section index={4} title="My Favorite VideoGames" id="videoGames">
                <Box sx={{
                    position: "relative",
                    height: 600,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    perspective: "1200px",
                    overflow: "hidden",
                }}>
                    {videogames.map((videogame, i) =>{
                        const total = videogames.length;
                        let offset = i - index;
                        if (offset > total / 2) offset -= total;
                        if (offset < -total / 2) offset += total;

                        return(
                            <Box
                                key={videogame.id}
                                sx={{
                                position: "absolute",
                                width: 280,
                                
                                transition: "0.5s ease",
                                transformStyle: "preserve-3d",
                                pointerEvents: offset === 0 ? "auto" : "none", //prevents actioning on not active cards

                                //can work now looks good with proper values for scaling
                                transform: `
                                translateX(${offset * 180}px)
                                scale(${offset === 0 ? 1 : 0.8})
                                rotateY(${offset * 30}deg)
                                `,
                                opacity: Math.abs(offset) > 2 ? 0 : 1,
                                zIndex: 10 - Math.abs(offset),
                                filter: offset === 0 ? "none" : "brightness(0.6)",
                                }}
                            >
                                <GameCard key={i} videogame={videogame}/>
                            </Box>
                        )
                    })}
                        
                    <IconButton
                        onClick={prev}
                        sx={{ position: "absolute", left: 50, color: "white", zIndex: 1000 }}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton
                        onClick={next}
                        sx={{ position: "absolute", right: 50, color: "white", zIndex: 1000 }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
                </Section>
                <Section index={5} title="My Music taste" tinted id="music">
                    <MusicGrid />
                </Section>
                <Section index={6} title="Some Software Projects I am proud of designing/participating" id="projects">
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center", p: 2 }}>
                    {projects.map((project, i) => (
                        <ProjectCard 
                            key={i}
                            name={project.name} 
                            description={project.description} 
                            imgSource={project.imgSource}
                            urlSource={project.urlSource}
                        />
                    ))}
                    {/*I think I can map the list of projects in here and display correctly with some CSS rules, hardcoded list */}
                </Box>
                </Section>
                <Section index={7} title="My contact Information" tinted id="contact" intro="If you like what you see or just want to match on socials feel free to reach out!">
                <Card sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)', justifySelf:'center'}}>
                    <IconButton component="a" target="blank" rel="noopener noreferrer" color="primary" href="https://www.linkedin.com/in/david-chicué-412475348/">
                        <LinkedInIcon fontSize="large"/>
                    </IconButton>
                    
                    <IconButton
                        component="a"
                        href="mailto:davinerto9@gmail.com"
                    >
                        <MailIcon fontSize="large" color="#000000" />
                    </IconButton>
                    <IconButton
                        component="a"
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://steamcommunity.com/id/lorddavidwiii/"
                    >
                        <VideogameAssetIcon fontSize="large" color="#000000" />
                    </IconButton>
                    <IconButton
                        component="a"
                        target="blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/@printlnDavid"
                    >
                        <YouTubeIcon fontSize="large" color="#000000" />
                    </IconButton>
                </Card>
                </Section>

                {/*Resume addition at the end (Maybe not very corporate)*/}
            </Container>
        </>
    )
}
