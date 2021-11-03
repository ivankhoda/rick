import { Typography } from "@material-ui/core";
import React from "react";
import { StyledPagesContainer } from "./StyledPagesContainer";

interface IProps {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export const PagesContainer: React.FC<IProps> = (props) => {
  return (
    <StyledPagesContainer>
      <Typography gutterBottom variant="h5">
        Total characters: {props.count}
      </Typography>
      <Typography gutterBottom variant="h5">
        Total pages: {props.pages}
      </Typography>
    </StyledPagesContainer>
  );
};
