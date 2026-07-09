import { Box, Typography, GlobalStyles, Dialog, IconButton, Icon, DialogContent} from "@mui/material";
import { hobbies } from "../utils/data";
import { treatments } from "../styles/treatments"
import React, {useState} from "react";
import CloseIcon from "@mui/icons-material/Close"
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

export default function HobbiesGrid() {
    const [selected, setSelected] = useState(null);
    const modalStyle = selected ? treatments[selected.treatment] : {};
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
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gridAutoRows: { xs: 130, md: 150 },
                gridAutoFlow: "dense",
                gap: 1.5,
            }}>
                {hobbies.map((h) => {
                    const style = treatments[h.treatment] || treatments.terminal;
                    const TileIcon = h.icon;
                    const isBig = (h.span?.cols || 1) >= 2 || (h.span?.rows || 1) >= 2;
                    const expandable = Boolean(h.detail || h.wishlist);

                    return (
                        <Box
                            key={h.id}
                            onClick={expandable ? () => setSelected(h) : undefined}
                            sx={{
                                gridColumn: { xs: `span ${Math.min(h.span?.cols || 1, 2)}`, md: `span ${h.span?.cols || 1}` },
                                gridRow: `span ${h.span?.rows || 1}`,
                                borderRadius: 3, p: 2,
                                display: "flex", flexDirection: "column", justifyContent: "space-between",
                                overflow: "hidden",
                                cursor: expandable ? "pointer" : "default",
                                transition: "transform 0.25s ease",
                                "&:hover": expandable ? { transform: "translateY(-4px)" } : {},
                                ...style,
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <TileIcon sx={{ fontSize: isBig ? 40 : 26 }} />
                                {expandable && <OpenInFullIcon sx={{ fontSize: 15, opacity: 0.55 }} />}
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontFamily: style.fontFamily || "Inconsolata",
                                    fontWeight: 700, fontSize: isBig ? 20 : 15,
                                }}>
                                    {h.name}
                                </Typography>
                                {isBig && h.blurb && (
                                    <Typography sx={{ fontFamily: "Inconsolata", fontSize: 12, opacity: 0.85, mt: 0.5, lineHeight: 1.4 }}>
                                        {h.blurb}
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            <Dialog
                open={Boolean(selected)}
                onClose={() => setSelected(null)}
                maxWidth="xs" fullWidth
                slotProps={{paper: { sx: { borderRadius: 3.5, overflowX: "hidden", overflowY: "auto",  animation: "none", ...modalStyle } }}}
            >
                {selected && (
                    <DialogContent sx={{ position: "relative", p: 3,'&::-webkit-scrollbar':{
                        display: "none"
                    }, msOverflowStyle: 'none', scrollbarWidth: 'none', }}>
                        <IconButton onClick={() => setSelected(null)} sx={{ position: "absolute", top: 8, right: 8, color: "inherit" }}>
                            <CloseIcon />
                        </IconButton>

                        <Icon sx={{ fontSize: 46 }} />
                        <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 800, fontSize: 24, mt: 1 }}>
                            {selected.name}
                        </Typography>
                        {selected.detail && (
                            <Typography sx={{ fontFamily: "Inconsolata", fontSize: 14, lineHeight: 1.7, mt: 1, opacity: 0.95 }}>
                                {selected.detail}
                            </Typography>
                        )}
                        {selected.stat && (
                            <Box sx={{
                                display: "inline-block", mt: 1.5, px: 1.25, py: 0.5, borderRadius: 1.5,
                                background: "rgba(0,0,0,0.2)", fontFamily: "Inconsolata", fontWeight: 700, fontSize: 13,
                            }}>
                                {selected.stat}
                            </Box>
                        )}
                        {selected.wishlist?.length > 0 && (
                            <>
                                <Typography sx={{ fontFamily: "Inconsolata", fontSize: 11, letterSpacing: 1, opacity: 0.6, mt: 2, mb: 0.5 }}>
                                    {selected.wishlistLabel || "MORE"}
                                </Typography>
                                {selected.wishlist.map((w, i) => (
                                    <Typography key={i} sx={{
                                        fontFamily: "Inconsolata", fontSize: 13, py: 0.75,
                                        borderTop: "1px solid rgba(128,128,128,0.25)",
                                    }}>
                                        {w}
                                    </Typography>
                                ))}
                            </>
                        )}
                    </DialogContent>
                )}
            </Dialog>
        </>
    );
}