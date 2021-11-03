import { Dialog, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Character } from "rickmortyapi/dist/interfaces";
import CardDetails from "../CardDetails/CardDetails";
// import { Character } from "../types/CharacterType";
//import StyledCard from "./StyledCard";
import { StyledCard, StyledCardsContainer } from "./StyledCardsContainer";

type IProps = {
  arr: Character[] | undefined;
};

export const CardsContainer: React.FC<IProps> = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Character>({} as Character);

  const handleOpen = (character: Character) => {
    setOpen(true);
    setActive(character);
  };
  const charactersArray = props.arr;

  if (!StyledCard) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <CardDetails character={active} />
      </Dialog>

      <StyledCardsContainer>
        {charactersArray ? (
          charactersArray.map((character) => (
            <StyledCard
              key={character.id}
              onClick={() => {
                handleOpen(character);
              }}
            >
              <img src={character.image} alt="Card name" />
              <h1>{character.name}</h1>
            </StyledCard>
          ))
        ) : (
          <Typography>Uppps, seems like we cannot display anything</Typography>
        )}
      </StyledCardsContainer>
    </div>
  );
};

//export default CardsContainer;
