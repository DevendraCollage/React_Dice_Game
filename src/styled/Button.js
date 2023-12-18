import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 5px;
  min-width: 170px;
  border: none;
  height: 30px;
  padding: 10px, 18px, 10px, 18px;
  gap: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  margin-left: 220px;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlinedButton = styled(Button)`
  // This will override the css
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
