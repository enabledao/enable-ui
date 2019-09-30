import React from "react";
import { StyledSpinner } from "./styled";

const Spinner: React.FC<{ size?: string, color?: string }> = ({ size, color }) => (
    <span style={{margin: "0px 4px"}}>
      <StyledSpinner viewBox={`0 0 ${size} ${size}`} size={size} color={color}>
        <circle
          className="path"
          cx={Math.floor(+size * .5)}
          cy={Math.floor(+size * .5)}
          r={Math.floor(+size * .4)}
          fill="none"
          strokeWidth="2"
        />
      </StyledSpinner>
    </span>
  );

Spinner.defaultProps ={
    size: "50",
    color: "#ffffff"
};

export default Spinner;
