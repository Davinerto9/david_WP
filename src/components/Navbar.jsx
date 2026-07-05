import { Slide, useScrollTrigger, AppBar, Container, Toolbar, Typography, Button, Box } from '@mui/material'
import React from 'react'

export default function Navbar(){

    const trigger = useScrollTrigger(
        {
            disableHysteresis: true,
            threshold: 100,
        }
    )

    const handleScroll = (id) => (e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return(
        <Slide direction='down' in={trigger}>
            <AppBar position='fixed' color='default' elevation={3}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                        <Typography variant='h6' sx={{fontWeight: 'bold', fontFamily: 'Consolas'}} component="div">
                            David Chicué
                        </Typography>
                        <Box sx={{
                            "& .MuiButton-root": {
                            fontFamily: 'Mulish, sans-serif',
                            },
                        }}>
                            <Button color="inherit" href='#me' onClick={handleScroll('me')}>
                                Me
                            </Button>
                            <Button color="inherit" href='#inspirations' onClick={handleScroll('inspirations')}>
                                Inspirations
                            </Button>
                            <Button color="inherit" href='#hobbies' onClick={handleScroll('hobbies')}>
                                Hobbies
                            </Button>
                            <Button color="inherit" href='#videoGames' onClick={handleScroll('videoGames')}>
                                My Fav. Games
                            </Button>
                            <Button color="inherit" href='#music' onClick={handleScroll('music')}>
                                My Fav. Music
                            </Button>
                            <Button color="inherit" href='#projects' onClick={handleScroll('projects')}>
                                Project Showcase
                            </Button>
                            <Button color="inherit" href='#contact' onClick={handleScroll('contact')}>
                                Contact me
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}