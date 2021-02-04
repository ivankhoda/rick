import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import CardsContainer from "./components/CardsContainer";
import PagesContainer from "./components/PagesContainer";
import { Character } from "./types/CharacterType";
type Info = {
  count: number;
  next: string;
  pages: number;
  prev: string;
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
  max-width: 1350px;
`;

const baseLink = `https://rickandmortyapi.com/api/character?page=`;
const App: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();

  const getData = async (link: string) => {
    const data = await (await fetch(`${link}`)).json();
    setData(data.results);
    setInfo(data.info);
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

        <ButtonGroup
          size="large"
          aria-label="large outlined primary button group"
        >
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
      </StyledControlPanel>
      <CardsContainer arr={data} />
    </StyledApp>
  );
};

export default App;
