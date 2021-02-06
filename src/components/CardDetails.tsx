// Components
import { Chip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Character } from "../types/CharacterType";

const useStyles = makeStyles({
  root: {
    width: 320,
  },
  media: {
    height: 250,
    backgroundSize: "cover",
  },
});

type Props = {
  character: Character;
};

const CardDetails: React.FC<Props> = ({ character }) => {
  const classes = useStyles();

  console.log(character.episode);
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={character.image} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Name: {character.name}
        </Typography>
        <Typography gutterBottom color="textSecondary">
          Status: {character.status}
          <br />
          Origin: {character.origin.name}
          <br />
          Location: {character.location.name}
          <br />
          Status: {character.status}
          <br />
          Species: {character.species}
          <br />
          Episodes total {character.episode.length}
          <br />
        </Typography>

        <Typography color="textSecondary">Episodes:</Typography>

        {character.episode.map((ep: any) => (
          <Chip key={ep} style={{ margin: 3 }} size="small" label={ep} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CardDetails;