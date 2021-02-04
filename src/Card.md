// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Chip from "@material-ui/core/Chip";
// import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
// import React from "react";
// // Types
// import { Character } from "../App";

// const useStyles = makeStyles({
// root: {
// width: 320,
// },
// media: {
// height: 250,
// backgroundSize: "cover",
// },
// });

// type Props = {
// character: Character;
// };

// const CharacterCard: React.FC<Props> = ({ character }) => {
// const classes = useStyles();
// return (
// <Card className={classes.root}>
// <CardMedia className={classes.media} image={character.image} />
// <CardContent>
// <Typography gutterBottom variant="h5">
// Name: {character.name}
// </Typography>
// <Typography gutterBottom color="textSecondary">
// Status: {character.status}
// <br />
// Origin: {character.origin}
// <br />
// Species: {character.species}
// <br />
// Gender: {character.gender}
// <br />
// <br />
// Type: {character.type}
// <br />
// Alias:
// <br />
// </Typography>
// {character.episode.map((episode: any) => (
// <Chip
// key={episode}
// style={{ margin: 3 }}
// size="small"
// label={episode}
// />
// ))}
// </CardContent>
// </Card>
// );
// };

// // export default CharacterCard;
