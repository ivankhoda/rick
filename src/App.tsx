import { Button, ButtonGroup } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCharacters } from "rickmortyapi";
import { Character } from "rickmortyapi/dist/interfaces";
import { CardsContainer } from "./components/CardsContainer/index";
import { Form } from "./components/FormControl/FormControl";
import { PagesContainer } from "./components/PagesContainer/index";
import { StyledApp, StyledControlPanel, StyledNotification } from "./StyledApp";

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

const App: React.FC = () => {
  const [data, setData] = useState<Character[] | undefined>([]);
  const [info, setInfo] = useState<Info>();
  const [errorMessage, setErrorMessage] = useState("");

  const getData = async (link: string | null) => {
    fetch(`${link}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((d) => d.json())
      .then((data) => {
        setData(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCharacters()
      .then((data) => {
        setData(data.data.results);
        setInfo(data.data.info);
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
    const success = 200;
    const filterCharacters = async () =>
      await getCharacters({
        name,
        species,
        type,
        gender,
        status,
      }).then((d) => {
        if (d.status === success) {
          setData(d.data.results);
          setInfo(d.data.info);
        }
        setErrorMessage(d.statusMessage);
      });
    filterCharacters();
  };
  if (!info || errorMessage) {
    return <StyledNotification>{errorMessage ? errorMessage : "Loading..."}</StyledNotification>;
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
