import { Slide, useScrollTrigger, AppBar, Container, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'

export default function Navbar(){

    const trigger = useScrollTrigger(
        {
            disableHysteresis: true,
            threshold: 100,
        }
    )

    return(
        <Slide direction='down' in={trigger}>
            <AppBar position='fixed' color='default' elevation={3}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{justifyContent: 'space-between'}}>
                        <Typography variant='h6' sx={{fontWeight: 'bold', fontFamily: 'Consolas'}} component="div">
                            David Chicué
                        </Typography>
                        <div>
                            <Button color="inherit">
                                Me
                            </Button>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}