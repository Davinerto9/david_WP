import { Container, Typography, Box, Card, Toolbar, GlobalStyles, CssBaseline, IconButton } from "@mui/material"
import React from "react"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"
import { projects, hobbies, videogames, qualities, musicTaste, inspirations } from "../utils/data"
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import MailIcon from '@mui/icons-material/Mail';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GameCard from "../components/GameCard"

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

    const next = () => {
        setIndex((prev) => (prev + 1) % videogames.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + videogames.length) % videogames.length);
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
                        // Hide scrollbar for IE and Edge
                        msOverflowStyle: 'none', 
                        // Hide scrollbar for Firefox
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
                <Typography id="me" variant="h5" align="center" sx={{fontFamily: 'Inconsolata', scrollMarginTop: '100px', fontWeight: 600}}>
                    Who am I?:
                </Typography> 
                <Card sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
                    <Typography align="center"  sx={{fontFamily: 'Inconsolata', fontStyle: 'italic', fontWeight: 600}}>
                        I am David, I am 21 years old and I am currently 3rd year of Computer Science as of now. This webpage represents who I am and what I have to offer, If you want to find out keep scrolling to know in depth!
                        {/*qualities should go here but how do I put it here ??????? */}
                    </Typography>
                </Card>
                <Typography id="inspirations" variant="h5" align="left" sx={{fontFamily: 'Inconsolata', scrollMarginTop: '100px', fontWeight: 'bold'}}>
                    My inspirations:
                </Typography>
                <Typography id="hobbies" variant="h5" align="right" sx={{scrollMarginTop: '100px'}}>
                    My hobbies:
                </Typography>
                <Typography id="videoGames" variant="h5" align="left" sx={{fontFamily: 'Inconsolata',scrollMarginTop: '100px', fontWeight: 'bold'}}>
                    My favorite games: 
                </Typography>
                <Box sx={{
                    position: "relative",
                    height: 500,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    perspective: "1200px",
                    overflow: "hidden",
                }}>
                    {videogames.map((videogame, i) =>{
                        const offset = i -index

                        return(
                            <Box
                                key={videogame.id}
                                sx={{
                                position: "absolute",
                                width: 280,
                                
                                transition: "0.5s ease",
                                transformStyle: "preserve-3d",

                                // transform: `
                                //     translateX(${offset * 160}px)
                                //     scale(${i === index ? 1 : 0.75})
                                //     rotateY(${offset * 35}deg)
                                // `,

                                opacity: Math.abs(offset) > 3 ? 0 : 1,
                                zIndex: i === index ? 10 : 5 - Math.abs(offset),
                                filter: i === index ? "none" : "brightness(0.6)",
                                }}
                            >
                                <GameCard key={i} videogame={videogame}/>
                            </Box>
                        )
                    })}
                        
                    <IconButton
                        onClick={prev}
                        sx={{ position: "absolute", left: 20, color: "white" }}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton
                        onClick={next}
                        sx={{ position: "absolute", right: 20, color: "white" }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
                <Typography id="music" variant="h5" align="right" sx={{fontFamily:'Montserrat, sans-serif', fontWeight: 800, scrollMarginTop: '100px'}}>
                    My music Taste: 
                </Typography>
                <Typography id="projects" variant="h5" align="center" sx={{fontFamily: 'Inconsolata', scrollMarginTop: '100px', fontWeight: 'bold'}}>
                    Some Software Projects I am proud of designing/participating:
                </Typography>
                
                
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

                <Typography variant="h5" align="center" sx={{fontFamily: 'Inconsolata', scrollMarginTop: '100px', fontWeight: 'bold'}}>
                    Contact Me and links!:
                </Typography> 
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

                {/*Resume addition at the end (Maybe not very corporate)*/}
            </Container>
        </>
    )
}
