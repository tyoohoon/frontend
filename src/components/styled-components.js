import styled from "styled-components";

export const PlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items; baseline;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.25em;
  width: 30em;
`;
export const Input = styled.input`
  backgroundcolor: red;
`;
export const ButtonBase = styled.button`
  // margin: 0 0 0 1em;
  height: 2.5em;
  border: none;
  width: 4em;
  color: white;
  font-weight: bold;
  // display: flex;
  // align-self: flex-end;
  // float: right;
`;
export const GreenButton = styled(ButtonBase)`
  background: green;
`;
export const MintButton = styled(ButtonBase)`
  background: skyblue;
`;
export const RedButton = styled(ButtonBase)`
  background: red;
`;