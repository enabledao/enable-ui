// Style of lender component
import styled from "styled-components";

const LenderWrapper = styled.div`
  border: 1px solid #e7ebf2;
  padding: 16px;
  border-radius: 6px;
  transition: all ease-in-out 0.4s;
  background-color: white;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(78, 81, 144, 0.18);
  }
`;

const LenderListWrapper = styled.div`
  background-color: white;
  padding: 8px 0;
  border-bottom: 1px solid #e7ebf2;
  margin-top: 10px;
`;

const LenderListAvatar = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  img {
    border-radius: 40px;
    width: 40px;
    height: 40px;
  }
`;

const LenderListInfo = styled.div`
  padding-left: 56px;
`;

export { LenderWrapper, LenderListWrapper, LenderListAvatar, LenderListInfo };
