import { Typography } from "@material-ui/core";
import React from "react";
import "../App.css";

interface IProps {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}
const baseLink = `https://rickandmortyapi.com/api/character?page=`;

const PagesContainer: React.FC<IProps> = (props) => {
  const pagesTotal: string[] = [];
  let numeredLink: string;
  const createLinks = (link: string, num: number) => {
    while (num > 0) {
      numeredLink = `${link}${num}`;
      num--;
      pagesTotal.push(numeredLink);
    }
    return;
  };
  createLinks(baseLink, props.pages);

  return (
    <div>
      <Typography gutterBottom variant="h5">
        Total characters: {props.count}
      </Typography>
      <Typography gutterBottom variant="h5">
        Total pages: {props.pages}
      </Typography>
    </div>
  );
};

export default PagesContainer;
