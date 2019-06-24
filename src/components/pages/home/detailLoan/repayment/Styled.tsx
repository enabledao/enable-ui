// Style of repayment table
import styled from "styled-components";

const RepaymentTableWrapper = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #e7ebf2;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: white;
  }
`;

export { RepaymentTableWrapper };
