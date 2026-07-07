import { Box, Typography, Paper } from "@mui/material";
import { qualities } from "../utils/data";

export default function AboutMe() {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" }, // asymmetric split
                gap: 3,
                alignItems: "center",
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 3,
                }}
            >
                <Typography sx={{ fontFamily: "Inconsolata", fontStyle: "italic", fontWeight: 600, fontSize: 17, lineHeight: 1.7 }}>
                    I am David, 21, currently in my 3rd year of Computer Science. This page is who
                    I am and and a little of what my powers and I can bring to the table — I built the whole thing in React to show, not just tell.
                    Keep scrolling.
                </Typography>
            </Paper>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 1.5,
                }}
            >
                {qualities.map((q) => (
                    <Box
                        key={q.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            p: 1.5,
                            borderRadius: 2,
                            background: "rgba(255,255,255,0.1)",
                            transition: "transform 0.2s ease, background 0.2s ease",
                            "&:hover": {
                                transform: "translateY(-3px)",
                                background: "rgba(255,255,255,0.22)",
                            },
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 22 }}>{q.icon}</Box>
                        <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 700, fontSize: 14 }}>
                            {q.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}