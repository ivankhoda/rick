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

const createQuery = (query: string, queryOptions: void) => {
  let filteredQuery = query + queryOptions;
  return filteredQuery;
};

const removeLastSymbol = (props: string) => {
  let str;
  str = props.substring(0, props.length - 1);
  return str;
};
const makeInputValuesToString = (props: object, callback: (arg: string) => void) => {
  let str = "";

  for (const [p, value] of Object.entries(props)) {
    str += `${p}=${value.toLowerCase()}&`;
  }
  return callback(str);
};

const removeEmptyInputs = (props: CharacterQuery) => {
  let empty = null || undefined || 0;

  let filteredObject = Object.fromEntries(Object.entries(props).filter(([key, value]) => value!.length !== empty));

  return filteredObject;
};

//https://rickandmortyapi.com/api/character/?name=rick&status=alive
const App: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info>();

  const getData = async (link: string) => {
    console.log(link);
    const data = await (await fetch(`${link}`, { method: "GET" })).json();
    setData(data.results);
    setInfo(data.info);
  };

  useEffect(() => {
    getData(baseLink);
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
    console.log(query);
    getData(query);
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
