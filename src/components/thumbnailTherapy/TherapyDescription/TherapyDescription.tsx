import React from "react";
import styled from "@emotion/styled";

// Emotion Describe
const Description = styled.p`
  width: 214px;
  height: 36px;
  font-family: Lato;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: var(--black);
  margin: 0 8px;
  font-width: 72px;
  font-height: 24px;
`;

// prop Describe
const ThumbnailDescr =
  "Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]";

// Write down, return Describe;
const TherapyDescription = () => {
  return <Description>{ThumbnailDescr}</Description>;
};

// export stuff
export default TherapyDescription;
