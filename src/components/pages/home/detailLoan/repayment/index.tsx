// Pages social credit component
import React from "react";
import { Margin } from "../../../../../styles/utils";
import { RepaymentTableWrapper } from "./Styled";

const RepaymentTable: React.FC = () => (
  <React.Fragment>
    <h5>Repayment Schedule</h5>
    <Margin top={24}>
      <RepaymentTableWrapper>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Repayment Due</th>
              <th>Principal</th>
              <th>Interest</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 Aug 2019</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Sept 2019</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Oct 2019</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Nov 2019</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Dec 2019</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Jan 2020</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Feb 2020</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Mar 2020</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Apr 2020</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 May 2020</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 Jun 2020</td>
              <td>300 Dai</td>
              <td>0 Dai</td>
              <td>300 Dai</td>
            </tr>
            <tr>
              <td>1 July 2020</td>
              <td>300 Dai</td>
              <td>60,000 Dai</td>
              <td>60,300 Dai</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>63,600 Dai</td>
              <td>60,000 Dai</td>
              <td>3600 Dai</td>
            </tr>
          </tbody>
        </table>
      </RepaymentTableWrapper>
    </Margin>
  </React.Fragment>
);

export default RepaymentTable;
