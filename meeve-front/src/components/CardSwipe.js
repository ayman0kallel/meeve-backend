import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function CardSwipe() {
    //TODO: remplacer le texte par variable bdd table séance
  return (
    <Card
      sx={{ minWidth: 150 }}
      style={{ backgroundColor: "#1ccf90", textAlign: "center"}}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Fitness
        </Typography>
        <Typography variant="h5" component="div">
          Fitness Park Lyon Part-Dieu
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="#2d2d2d">
          Vendredi 11 novembre 
        </Typography>
        <Typography variant="body2">9h - 12h</Typography>
      </CardContent>
    </Card>
  );
}
