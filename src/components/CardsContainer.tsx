import { Dialog } from "@material-ui/core";
import React, { useState } from "react";
import "../App.css";
import { Character } from "../types/CharacterType";
//import StyledCard from "./StyledCard";
import { StyledCard, StyledCardsContainer } from "./CardContainer/StyledCardsContainer";
import CardDetails from "./CardDetails";

type IProps = {
  arr: Character[];
};

const CardsContainer: React.FC<IProps> = (props) => {
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
        {charactersArray.map((character) => (
          <StyledCard
            key={character.id}
            onClick={() => {
              handleOpen(character);
            }}
          >
            <img src={character.image} alt="Card name" />
            <h1>{character.name}</h1>
          </StyledCard>
        ))}
      </StyledCardsContainer>
    </div>
  );
};

export default CardsContainer;
