import { Container, Typography, Box, Card, Toolbar } from "@mui/material"
import React from "react"
import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

//I dont know if it's correct to put Tech stack is toooooo much corporate crap, projects I think should stay...
//Things in mind: Goku addition, wild effects, music, a super advanced NON corporate dashboard, something creative with transitions and stuff...

export default function MainPage(){

    return(
        <Container maxWidth="sm">
            <Navbar/>
            <Typography variant="h4" align="center" sx={{fontFamily: 'Consolas'}}>
                Hello this is David!
            </Typography>

            <Card>
                <Typography variant="h5" align="center" sx={{fontFamily: 'Consolas'}}>
                    My Tech Stack:
                </Typography> 
            </Card>
            <Card>
                <Typography variant="h5" align="center" sx={{fontFamily: 'Consolas'}}>
                    My Projects
                </Typography>
            </Card>
            

        </Container>
    )

}