import styled from "styled-components";

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  //max-width: 1300px;
  padding: 20px;
  margin: 15px;
  overflow: hidden;
  position: relative;
  background: #60cbe6;
  border-radius: 0.5vw;
`;

export const StyledCard = styled.div`
  transition: transform 500ms ease;
  border-radius: 0.5vw;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transform: scale(1);
  user-select: none;
  border: solid;
  background-color: white;
  img {
    height: 100%;
    width: 100%;
    border-radius: 0.2vw 0.2vw 0 0;
    box-sizing: border-box;
  }
  h1 {
  }
  :hover {
    transform: scale(${() => 5 / 100 + 1}) !important;
  }
  :hover ~ * {
    transform: translateX(${() => 5 / 2 + "%"}) !important;
  }
  &.left {
    transform-origin: left;
    :hover ~ * {
      transform: translateX(${() => 15 + "%"}) !important;
    }
  }
  &.right {
    transform-origin: right;
    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;
