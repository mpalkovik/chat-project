import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import emptyRadio from "../../static/svg/icon-radio-empty.svg";

const EmptyRadio: FunctionComponent = () => (
  <div>
    <img src={emptyRadio} alt="svg" />
  </div>
);

export default EmptyRadio;
