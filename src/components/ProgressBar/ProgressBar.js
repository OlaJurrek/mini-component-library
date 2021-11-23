/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper style={styles}>
      <Bar
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
        style={{ "--width": value + "%" }}
      >
        <VisuallyHidden>{value} %</VisuallyHidden>
      </Bar>
    </Wrapper>
  );
};

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
    "--padding": 0,
  },
  large: {
    "--height": 16 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px",
  },
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;

const Bar = styled.div`
  width: var(--width);
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(p) => (p.value < 98 ? 0 : "4px")};
  border-bottom-right-radius: ${(p) => (p.value < 98 ? 0 : "4px")};
`;

export default ProgressBar;
