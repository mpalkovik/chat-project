import React from "react";
import styled from "@emotion/styled";

const Name = styled.p`
  width: 108px;
  height: 28px;
  font-family: Gilbert;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: var(--black);
  margin: 0 8px;
`;

const ThumbnailName = "MAMA CHAT";

const TherapyName = () => {
  return <Name>{ThumbnailName}</Name>;
};

export default TherapyName;
