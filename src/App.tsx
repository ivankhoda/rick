import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardsContainer from "./components/CardsContainer";
import { Form } from "./components/FormControl";
import PagesContainer from "./components/PagesContainer";
import { Character } from "./types/CharacterType";

type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string;
};
type Status = {
  status: string;
};
type Gender = {
  gender: "female" | "male" | "genderless" | "unknown";
};
type CharacterQuery = {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
};
const StyledControlPanel = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const baseLink = `https://rickandmortyapi.com/api/character?page=`;
const linkForFiltering = `https://rickandmortyapi.com/api/character/?`;
// const Char: CharacterQuery = {
//   name: "Rick",
//   status: "alive",
//   species: "human",
//   //type?: string;
//   gender: "male",
// };

// { female: "female" }, { male: "male" }, { genderless: "genderless" }, { unknown: "unknown" }

// const createQuery = (props: CharacterQuery) => {
//   let initialQuery = linkForFiltering;
// };
// const checkInputs = (props: CharacterQuery) => {
//   console.log(props);
//   console.log(Object.keys(props));
// };
// checkInputs(Char);

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
const App: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();

  const getData = async (link: string) => {
    const data = await (await fetch(`${link}`)).json();
    setData(data.results);
    setInfo(data.info);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let name = document.getElementById("Name");
    console.log(event.currentTarget);
    console.log(document.getElementById("Species")?.innerText);
    console.log(name, "name");
    console.log(document.getElementById("Type")?.innerHTML);
    console.log(document.getElementById("selectGender")?.innerHTML);
    console.log(document.getElementById("selectStatus")?.innerText);
  };
  useEffect(() => {
    getData(baseLink);
  }, []);

  if (!info) {
    return <div>Loading...</div>;
  }
  const { count, next, pages, prev } = { ...info };

  return (
    <StyledApp>
      <StyledControlPanel>
        <PagesContainer count={count} next={next} pages={pages} prev={prev} />

        <ButtonGroup size="large" aria-label="large outlined primary button group">
          {" "}
          <Button
            color="secondary"
            disabled={!prev}
            onClick={() => {
              getData(prev);
            }}
          >
            Previous
          </Button>
          <Button
            color="secondary"
            disabled={!next}
            onClick={() => {
              getData(next);
            }}
          >
            Next
          </Button>
        </ButtonGroup>
        <Form onSubmit={onSubmit} />
      </StyledControlPanel>
      <CardsContainer arr={data} />
    </StyledApp>
  );
};

export default App;
