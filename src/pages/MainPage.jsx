import { Container, Typography, Box, Card } from "@mui/material"
import React from "react"
import { useState, useEffect } from "react"


export default function MainPage(){

    return(
        <Container maxWidth="sm">
            <Typography variant="h1" align="center">
                Hello this is David!
            </Typography>

            <Card>
                <Typography variant="h3" align="center">
                    My Tech Stack:
                </Typography> 
            </Card>
            <Card>
                <Typography variant="h3" align="center">
                    My Projects
                </Typography>
            </Card>
            

        </Container>
    )

}