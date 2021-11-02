import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";
import { Character } from "rickmortyapi/dist/interfaces";
import styled from "styled-components";
import CardsContainer from "./components/CardsContainer";
import { Form } from "./components/FormControl";
import { PagesContainer } from "./components/PagesContainer";
import { createQuery, makeInputValuesToString, removeEmptyInputs, removeLastSymbol } from "./utils";

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
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

const App: React.FC = () => {
  const [data, setData] = useState<Character[] | undefined>([]);
  const [info, setInfo] = useState<Info>();

  const getData = async (link: string | null) => {
    console.log(link);
    // fetch(`${link}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   //getCharacters()
    //   .then((d) => d.json())
    //   .then((data) => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     setData(data.results), setInfo(data.info);
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacters()
      .then((data) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setData(data.data.results), setInfo(data.data.info);
      })
      .catch((err) => console.log(err));
  }, []);
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    let name = (document.getElementById("Name") as HTMLInputElement).value;
    let species = (document.getElementById("Species") as HTMLInputElement).value;
    let type = (document.getElementById("Type") as HTMLInputElement).value;
    let gender = (document.getElementById("selectGender") as HTMLSelectElement).value;
    let status = (document.getElementById("selectStatus") as HTMLSelectElement).value;
    let inputs = { name, species, type, gender, status };
    let filteredInputValuesObject = removeEmptyInputs(inputs);
    let queryOptions = makeInputValuesToString(filteredInputValuesObject, removeLastSymbol);

    let query = createQuery(linkForFiltering, queryOptions);

    const filterCharacters = async () =>
      await getCharacters({
        name,
        species,
        type,
        gender,
        status,
      }).then((d) => {
        console.log(d.data.info);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        setData(d.data.results), setInfo(d.data.info);
      });
    filterCharacters();
  };
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
