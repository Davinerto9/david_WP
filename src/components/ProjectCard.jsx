import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ProjectCard({imgSource, name, description, urlSource}) {
  return (
    <Card sx={{ maxWidth: 345, width: "100%"}}>
      <CardActionArea component="a" href={urlSource || "#"} target='blank' rel="noopener noreferrer" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}>
        <CardMedia
          component="img"
          height="160"
          image={imgSource}
          alt="projectGIT"
          sx={{ display: "block" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Inconsolata', fontWeight: 600}}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'Inconsolata', fontWeight: 'bold', fontStyle: 'italic' }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
