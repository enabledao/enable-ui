import * as React from "react";

export interface InvestmentBreakdownProps {}

export interface InvestmentBreakdownState {}

class InvestmentBreakdown extends React.Component<
  InvestmentBreakdownProps,
  InvestmentBreakdownState
> {
  constructor(props: InvestmentBreakdownProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
        culpa aliquam eos laborum, vel deserunt velit quod deleniti inventore
        eum porro suscipit rerum dolores, in incidunt tenetur sed libero ea!
      </p>
    );
  }
}

export default InvestmentBreakdown;
