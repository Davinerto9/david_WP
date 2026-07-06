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


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: theme.color,
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        border: theme.border,
        background: theme.background,
        color: "#fff",
        borderRadius: "8px",
        maxHeight: '80vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        msOverflowStyle: 'none', 
        scrollbarWidth: 'none',
    };

    // Helper function to safely render strings or lists cleanly
    const renderValue = (value) => {
        if (Array.isArray(value)) {
            return (
                <ul style={{ margin: "4px 0 0 20px", padding: 0 }}>
                    {value.map((item, index) => (
                        <li key={index} style={{ fontSize: "0.9rem", color: "#ddd" }}>
                            {item}
                        </li>
                    ))}
                </ul>
            );
        }
        return ` ${value}`;
    };

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
                    <Typography align="center" gutterBottom variant="h4" component="div" sx={{fontFamily: 'Inconsolata'}}>
                        {videogame.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2" sx={{ fontFamily: 'Consolas', fontWeight: 'bold', mb: 2 }}>
                        {videogame.name}
                    </Typography>
                    
                    <Box id="modal-modal-description">
                        {videogame.relevantData.map((item) => (
                            <Box key={item.label} sx={{ mb: 1.5 }}>
                                <Typography component="div" variant="body1">
                                    <strong style={{ color: '#87CEFA' }}>{item.label}:</strong>
                                    {renderValue(item.value)}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Modal>
        </Card>
    )

}