import React, { useState } from "react";
import { gameThemes } from "../styles/gameThemes";
import { Card, Box, Modal } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

//modal + card carrousel actioned with buttons like the dokkan db webpage, maybe i should copy that javascript
export default function GameCard({videogame}){

    const theme = gameThemes[videogame.theme];
    const[open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return(
        <Card
            sx={{
                border: theme.border,
                background: theme.background,
                color: theme.color,
                boxShadow: `0 0 18px ${theme.glow}`,
                transition: "0.3s",

                "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: `0 0 32px ${theme.glow}`,
                },
            }}
        >
        <CardActionArea onClick={handleOpen}>
            <CardMedia
            component="img"
            
            image={videogame.img}
            alt="game img"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{fontFamily: 'Consolas'}}>
                    {videogame.name}
                </Typography>
            </CardContent>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {videogame.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        
                    </Typography>
                </Box>
            </Modal>
        </CardActionArea>
        </Card>
    )

}