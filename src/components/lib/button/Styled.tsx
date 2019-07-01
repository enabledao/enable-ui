// Style of button
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: inline-block;
  padding: 8px 16px;
  min-width: 100px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  background-color: #9544ed;
  border: 1px solid #6713c4;
  color: white;
  width: 100%;
  line-height: 30px;
  transition: all ease-in-out 0.2s;
  box-shadow: 0 2px 0 #6713c4, 1px 3px 6px #6713c4;
  &:hover {
    background-color: #6713c4;
  }
`;

export { ButtonWrapper };
