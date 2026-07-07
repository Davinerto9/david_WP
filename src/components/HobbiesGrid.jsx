import { Box, Typography, GlobalStyles } from "@mui/material";
import { hobbies } from "../utils/data";
import { treatments } from "../styles/treatments"

export default function HobbiesGrid() {
    return (
        <>
            <GlobalStyles
                styles={{
                    "@keyframes hobbyShine": {
                        "0%": { backgroundPosition: "0% 50%" },
                        "100%": { backgroundPosition: "200% 50%" },
                    },
                }}
            />
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
                    gap: 2,
                    width: "100%",
                    p: 2,
                }}
            >
                {hobbies.map((h) => {
                    const style = (treatments[h.treatment] || treatments.default)();
                    return (
                        <Box
                            key={h.id}
                            sx={{
                                borderRadius: 2,
                                p: 2.5,
                                minHeight: 120,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                cursor: "default",
                                transition: "transform 0.25s ease",
                                "&:hover": { transform: "translateY(-6px)" },
                                ...style,
                            }}
                        >
                            <Typography sx={{ fontSize: 34, lineHeight: 1 }}>{h.icon}</Typography>
                            <Typography sx={{ fontFamily: "Inconsolata", fontWeight: 700, mt: 1 }}>
                                {h.name}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>
        </>
    );
}