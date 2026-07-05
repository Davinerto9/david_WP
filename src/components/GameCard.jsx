import React from "react";
import { gameThemes } from "../data/gameThemes";
import { Card } from "@mui/material";

//modal + card carrousel actioned with buttons like the dokkan db webpage, maybe i should copy that javascript
export default function GameCard({id, name, theme, img, relevantData}){

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
        />
    )

}