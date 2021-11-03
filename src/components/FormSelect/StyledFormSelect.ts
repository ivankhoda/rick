import styled from "styled-components";

export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
  width: 100%;
`;
export const StyledSelect = styled.select`
  min-height: 20px;
  min-width: 40px;

  border-bottom: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  border-top: none;
  border-left: none;
  border-right: none;
`;
