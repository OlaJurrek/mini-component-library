/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      style={{
        "--padding": styles.padding + "px",
        "--borderRadius": styles.borderRadius + "px",
      }}
    >
      <VisuallyHidden>{value} %</VisuallyHidden>
      <BarWrapper>
        <Bar
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ "--width": value + "%", "--height": styles.height + "px" }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const SIZES = {
  small: {
    height: 8,
    borderRadius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    borderRadius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    borderRadius: 8,
    padding: 4,
  },
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
