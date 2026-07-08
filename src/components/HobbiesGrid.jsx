import { Box, Typography, GlobalStyles, Dialog, IconButton, Icon, DialogContent } from "@mui/material";
import { hobbies } from "../utils/data";
import { treatments } from "../styles/treatments"
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close"

export default function HobbiesGrid() {
    const [selected, setSelected] = useState(null);
    const style = selected ? (treatments[selected.treatment] || treatments.default) : {};
    const Icon = selected?.icon;

    return (
        <>
            <GlobalStyles styles={{
                "@keyframes hobbyShine": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "100%": { backgroundPosition: "100% 50%" },
                },
            }} />

            <Box sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
                gap: 2, width: "100%",
            }}>
                {hobbies.map((h) => {
                    const tile = treatments[h.treatment] || treatments.default;
                    const TileIcon = h.icon;
                    return (
                        <Box
                            key={h.id}
                            onClick={() => setSelected(h)}
                            sx={{
                                borderRadius: 2, p: 2.5, minHeight: 150,
                                display: "flex", flexDirection: "column", justifyContent: "space-between",
                                cursor: "pointer",
                                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                                "&:hover": { transform: "translateY(-6px)" },
                                ...tile,
                            }}
                        >
                            <TileIcon sx={{ fontSize: 40 }} />
                            <Box>
                                <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 700, fontSize: 16, mb: 0.5 }}>
                                    {h.name}
                                </Typography>
                                <Typography sx={{ fontFamily: "Inconsolata", fontSize: 12, opacity: 0.8, lineHeight: 1.4 }}>
                                    {h.blurb}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            <Dialog
                open={Boolean(selected)}
                onClose={() => setSelected(null)}
                maxWidth="xs"
                fullWidth
                slotProps={{paper: {sx : {
                    borderRadius: 3, overflow: "hidden", ...style, animation: "none"
                }}}}
            >
                {selected && (
                    <DialogContent sx={{ position: "relative", p: 3 }}>
                        <IconButton
                            onClick={() => setSelected(null)}
                            sx={{ position: "absolute", top: 8, right: 8, color: "inherit" }}
                        >
                            <CloseIcon />
                        </IconButton>

                        <Icon sx={{ fontSize: 52, mb: 1 }} />
                        <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 800, fontSize: 24, mb: 1 }}>
                            {selected.name}
                        </Typography>
                        <Typography sx={{ fontFamily: "Inconsolata", fontSize: 15, lineHeight: 1.7, mb: selected.stat ? 2 : 0 }}>
                            {selected.detail}
                        </Typography>
                        {selected.stat && (
                            <Box sx={{
                                display: "inline-block", mt: 1, px: 1.5, py: 0.5,
                                borderRadius: 1.5, background: "rgba(0,0,0,0.15)",
                                fontFamily: "Inconsolata", fontWeight: 700, fontSize: 13,
                            }}>
                                {selected.stat}
                            </Box>
                        )}
                    </DialogContent>
                )}
            </Dialog>
        </>
    );
}