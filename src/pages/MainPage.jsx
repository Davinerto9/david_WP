import { Container, Typography, Box, Card, Toolbar, GlobalStyles, CssBaseline } from "@mui/material"
import React from "react"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard"

//I dont know if it's correct to put Tech stack is toooooo much corporate crap, projects I think should stay...
//Things in mind: Goku addition, wild effects, music, a super advanced NON corporate dashboard, something creative with transitions and stuff...

export default function MainPage(){

    const projects =[
        {
            name: "jhonny",
            description: "jhonnny2",
            imgSource: "done",
            urlSource: "https://www.dokkandb.com"
        },
        {
            name: "jhonny",
            description: "jhonnny3",
            imgSource: "done",
            urlSource: "https://www.dokkandb.com"
        }
    ]

    const fullText = "Hello this is David!";
    const [displayedText, setDisplayedText] = useState("");

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

    return(
        <>
            {/* Limpia márgenes ocultos y estilos nativos del navegador */}
            <CssBaseline />

            {/* Inyección de la animación del degradado a nivel global */}
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
                        fontFamily: 'Consolas', 
                        mt: 4,
                        fontWeight: 'bold',
                        display: 'inline-block',
                        width: '100%',
                        // Añade una barra parpadeante al final del texto imitando una terminal
                        '&::after': {
                            content: '"|"',
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
                <Typography variant="h5" align="center" sx={{fontFamily: 'Consolas'}}>
                    My Tech Stack:
                </Typography> 
                <Card sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}>
                    {/* Contenido del Tech Stack */}
                </Card>
                <Typography variant="h5" align="center" sx={{fontFamily: 'Consolas'}}>
                    My Projects
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
                    {/*I think I can map the list of projects in here and display correctly with some CSS rules, the question is Hardcoded list? or API fetching*/}
                </Box>
            </Container>
        </>
    )
}
