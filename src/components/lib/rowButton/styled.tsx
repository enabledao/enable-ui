import styled, { css } from 'styled-components'
import { ButtonProps } from './interface'

const ButtonWrapper = styled.button<ButtonProps>`
  float:left;
  width: 25%;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  // font-weight: 600;
  color: white;
  // width: 100%;
  line-height: 30px;
  transition: all ease-in-out 0.2s;
  color: black;
  border: 1px solid #e7ebf2;
  background-color: white;
  &:hover {
    background-color: #e7ebf2;
  }
  ${props =>
      props.color === 'purple' &&
      css`
          a {
              color: white;
          }
          background-color: #9544ed;
          border: 1px solid #6713c4;
          box-shadow: 0 2px 0 #6713c4, 1px 3px 6px #6713c4;
          color: white;
          &:hover {
              background-color: #6713c4;
          }
      `}
  ${props =>
      props.color === 'green' &&
      css`
          a {
              color: white;
          }
          background-color: #21b549;
          border: 2px solid #21b549;
          color: white;
          &:hover {
              background-color: #21b549;
          }
      `}

  ${props =>
      props.color === 'green' &&
      props.outline &&
      css`
          a {
              color: white;
          }
          background-color: white;
          border: 2px solid #21b549;
          color: #21b549;
          &:hover {
              color: white;
          }
      `}
`

export { ButtonWrapper }
