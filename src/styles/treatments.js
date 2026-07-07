export const treatments = {
    default: () => ({
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
    }),
    shine: () => ({
        background: "linear-gradient(120deg, #b78628, #fcf6ba, #b78628, #fbf5b7)",
        backgroundSize: "200% 200%",
        animation: "hobbyShine 3s linear infinite",
        color: "#3a2e00",
    }),
    limited: () => ({
        background: "rgba(20,20,30,0.55)",
        border: "2px dashed #ffd54f",
        boxShadow: "0 0 18px rgba(255,213,79,0.4)",
        transform: "scale(1.0)",
    }),
    manga: () => ({
        background: "#f5f5f5",
        color: "#111",
        border: "3px solid #111",
        backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0 3px, transparent 3px 6px)",
    }),
    comic: () => ({
        background: "#ffe14d",
        color: "#c0392b",
        border: "3px solid #111",
        backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0 6px, transparent 6px 14px)",
        fontWeight: 900,
    }),
    vintage: () => ({
        background: "#2b2b2b",
        color: "#7CFC00",
        fontFamily: "monospace",
        textShadow: "0 0 6px #7CFC00",
        boxShadow: "inset 0 0 40px rgba(0,0,0,0.8)",
        border: "4px solid #555",
    }),
};