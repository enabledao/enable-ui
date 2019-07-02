import styled from "styled-components";

const RepaymentWrapper = styled.div`
  padding: 80px 0;
  border-top: 1px solid #e7ebf2;
`;

const RepaymentCard = styled.div`
  background-color: white;
  border: 1px solid #e7ebf2;
  margin-top: 24px;
  padding: 8px 16px;
  border-radius: 4px;
`;

const RepaymentInline = styled.div`
  width: calc(100% / 4);
  display: inline-block;
`;

export { RepaymentWrapper, RepaymentCard, RepaymentInline };
