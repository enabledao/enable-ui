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
  background-color: #36b37e;
  border: 1px solid #2a8c62;
  color: white;
  width: 100%;
  line-height: 20px;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: #2a8c62;
  }
`;

export { ButtonWrapper };
