import { Box, Typography } from "@mui/material";
import { useReveal } from "../hooks/useReveal";

export default function Section({ index, title, intro, tinted = false, id, children }) {
    const { ref, visible } = useReveal();

    return (
        <Box
            ref={ref}
            id={id}
            sx={{
                scrollMarginTop: "100px",
                borderRadius: 3,
                py: 4,
                px: { xs: 2, md: 3.5 },
                mb: 2,
                background: tinted ? "rgba(255,255,255,0.08)" : "transparent",
                backdropFilter: tinted ? "blur(6px)" : "none",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.75, mb: intro ? 1.5 : 3 }}>
                <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 800, fontSize: 40, lineHeight: 1, color: "rgba(255,255,255,0.35)" }}>
                    {String(index).padStart(2, "0")}
                </Typography>
                <Typography sx={{ fontFamily: "Inconsolata", fontSize: 22, fontWeight: 700, color: "#1a1a2e" }}>
                    {title}
                </Typography>
                <Box sx={{ flex: 1, height: 2, background: "rgba(255,255,255,0.3)" }} />
            </Box>

            {intro && (
                <Typography sx={{
                    fontFamily: "Inconsolata", fontStyle: "italic", fontSize: 15,
                    opacity: 0.85, mb: 3, maxWidth: 620, lineHeight: 1.6, color: "#1a1a2e",
                }}>
                    {intro}
                </Typography>
            )}

            {children}
        </Box>
    );
}