import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function InspirationsStrip({ data = [] }) {
    const [active, setActive] = useState(null);

    const chunkArray = (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    };

    const itemRows = chunkArray(data, 4);
    

    return (
        <Box 
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: 1.5, 
                width: "100%", 
                px: 2 
            }}
            onMouseLeave={() => setActive(null)}
        >
            {itemRows.map((row, rowIndex) => (
                <Box
                    key={rowIndex}
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 1.5,
                        height: 420,
                        height: { xs: "auto", md: 420 },
                        width: "100%",
                    }}
                >
                    {row.map((p) => {
                        const isActive = active === p.id;
                        const dimmed = active !== null && !isActive;

                        return (
                            <Box
                                key={p.id}
                                onMouseEnter={() => setActive(p.id)}
                                sx={{
                                    position: "relative",
                                    // Maintained your smooth accordion logic per row
                                    flex: isActive ? 4 : 1, 
                                    minHeight: { xs: isActive ? 260 : 80, md: "auto" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    transition: "flex 0.5s ease, min-height 0.5s ease, filter 0.4s ease",
                                    filter: dimmed ? "brightness(0.45) saturate(0.7)" : "none",
                                    boxShadow: isActive
                                        ? `0 0 30px ${p.accent}, inset 0 0 0 3px ${p.accent}`
                                        : "0 4px 12px rgba(0,0,0,0.3)",
                                    backgroundImage: `url(${p.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                {/* Gradient scrim */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        background: `linear-gradient(to top, ${p.accent}cc 0%, transparent 55%)`,
                                        opacity: isActive ? 1 : 0.75,
                                        transition: "opacity 0.4s ease",
                                    }}
                                />

                                <Box sx={{ position: "absolute", bottom: 0, p: 2, width: "100%" }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "Inconsolata",
                                            fontWeight: 800,
                                            color: "#fff",
                                            writingMode: { xs: "horizontal-tb", md: isActive ? "horizontal-tb" : "vertical-rl" },
                                            transition: "0.4s ease",
                                            textShadow: "0 2px 6px rgba(0,0,0,0.6)",
                                        }}
                                    >
                                        {p.name}
                                    </Typography>
                                    <Box
                                        onTouchStart={(e) => e.stopPropagation()}
                                        sx={{
                                            maxHeight: isActive ? 120 : 0,
                                            opacity: isActive ? 1 : 0,
                                            overflowX: "hidden",
                                            overflowY: "auto",
                                            transition: "max-height 0.5s ease, opacity 0.5s ease 0.1s",         
                                            pr: 1, // Adds right padding so text doesn't touch the scrollbar
                                            "&::-webkit-scrollbar": {
                                                width: "4px",
                                                display: 'none'
                                            },
                                            msOverflowStyle: 'none', 
                                            scrollbarWidth: 'none',
                                            WebkitOverflowScrolling: "touch", 
                                        }}
                                    >
                                        <Typography sx={{ fontFamily: "Inconsolata", color: "#fff", opacity: 0.85, fontSize: 16 }}> 
                                            {p.creator}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Inconsolata", color: "#fff", opacity: 0.85, fontSize: 13 }}>
                                            {p.series}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: "Inconsolata",
                                                fontStyle: "italic",
                                                color: "#fff",
                                                mt: 0.5,
                                                fontSize: 10,
                                            }}
                                        >
                                            "{p.greatestQuote}"
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            ))}
        </Box>
    );
}
