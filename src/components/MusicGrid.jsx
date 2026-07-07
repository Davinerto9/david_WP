import { Box, Typography, Dialog, DialogContent, Chip } from "@mui/material";
import { useState } from "react";
import { musicTaste } from "../utils/data";

export default function MusicGrid() {
    const [selected, setSelected] = useState(null);

    return (
        <>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                    justifyContent: 'center',
                    gap: 2,
                    width: "100%",
                    p: 2,
                }}
            >
                {musicTaste.map((a) => (
                    <Box
                        key={a.id}
                        onClick={() => setSelected(a)}
                        sx={{
                            position: "relative",
                            aspectRatio: "1 / 1",
                            borderRadius: 2,
                            overflow: "hidden",
                            cursor: "pointer",
                            backgroundImage: `url(${a.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                            "&:hover": {
                                transform: "translateY(-6px) scale(1.03)",
                                boxShadow: `0 0 24px ${a.accent}`,
                            },
                            "&:hover .artistLabel": { opacity: 1 },
                        }}
                    >
                        <Box
                            className="artistLabel"
                            sx={{
                                position: "absolute",
                                inset: 0,
                                display: "flex",
                                alignItems: "flex-end",
                                p: 1.5,
                                opacity: 0,
                                transition: "opacity 0.3s ease",
                                background: `linear-gradient(to top, ${a.accent}dd, transparent 60%)`,
                            }}
                        >
                            <Typography sx={{ fontFamily: "Montserrat", fontWeight: 800, color: "#fff" }}>
                                {a.artist}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Dialog
                open={Boolean(selected)}
                onClose={() => setSelected(null)}
                maxWidth="xs"
                fullWidth
                slotProps={{
                    paper: {sx: { //yeah I make IT WORK
                        borderRadius: 3,
                        overflow: "hidden",
                        // modal tints to the artist's color
                        background: selected
                            ? `linear-gradient(160deg, ${selected.accent}ee 0%, #1a1a1a 90%)`
                            : "#1a1a1a",
                    },}
                }}
            >
                {selected && (
                    <DialogContent sx={{ color: "#fff" }}>
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
                            <Box
                                component="img"
                                src={selected.img}
                                sx={{ width: 72, height: 72, borderRadius: 2, objectFit: "cover" }}
                            />
                            <Box>
                                <Typography variant="h6" sx={{ fontFamily: "Montserrat", fontWeight: 800 }}>
                                    {selected.artist}
                                </Typography>
                                <Typography sx={{ fontFamily: "Inconsolata", fontSize: 13, opacity: 0.85 }}>
                                    {selected.listenedMinutes.toLocaleString()} min listened
                                </Typography>
                            </Box>
                        </Box>

                        <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 700, mb: 1, opacity: 0.9 }}>
                            Favorite tracks
                        </Typography>

                        {Object.entries(selected.favTrackList).map(([num, title]) => {
                            const isTop = Number(num) === selected.topTrack;
                            return (
                                <Box
                                    key={num}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        py: 0.5,
                                        borderBottom: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <Typography sx={{ fontFamily: "Inconsolata", opacity: 0.5, width: 22 }}>
                                        {num}
                                    </Typography>
                                    <Typography sx={{ fontFamily: "Inconsolata", flex: 1, fontWeight: isTop ? 800 : 400 }}>
                                        {title}
                                    </Typography>
                                    {isTop && (
                                        <Chip
                                            label="TOP"
                                            size="small"
                                            sx={{
                                                bgcolor: "rgba(255,255,255,0.9)",
                                                color: selected.accent,
                                                fontWeight: 800,
                                                height: 20,
                                            }}
                                        />
                                    )}
                                </Box>
                            );
                        })}
                    </DialogContent>
                )}
            </Dialog>
        </>
    );
}