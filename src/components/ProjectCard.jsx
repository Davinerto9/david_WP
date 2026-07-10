import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function ProjectCard({ imgSource, name, description, urlSource, stack = [] }) {
  return (
    <Card
      component="a"
      href={urlSource || "#"}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        maxWidth: 360,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        background: "rgba(255,255,255,0.9)",
        "&:hover .project-arrow": { opacity: 1, transform: "translate(0,0)" },
      }}
    >
      <Box sx={{ position: "relative", overflow: "hidden", height: 170 }}>
        <CardMedia
          component="img"
          image={imgSource}
          alt={name}
          className="project-img"
          sx={{ height: "100%", objectFit: "cover", transition: "transform 0.5s ease", display: "block" }}
        />
        <ArrowOutwardIcon
          className="project-arrow"
          sx={{
            position: "absolute", top: 12, right: 12, color: "#fff", fontSize: 22,
            opacity: 0, transform: "translate(-6px, 6px)", transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" sx={{ fontFamily: "Inconsolata", fontWeight: 700, lineHeight: 1.25, color: "#1a1a2e" }}>
          {name}
        </Typography>

        <Typography
          variant="body2"
          sx={{color: "text.secondary", fontFamily: "Inconsolata", fontStyle: "italic", lineHeight: 1.55, fontWeight: 800}}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}