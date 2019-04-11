import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import emptyCheck from "../../static/svg/icon-checkbox-empty.svg";

const EmptyCheckbox: FunctionComponent = () => (
  <div>
    <img src={emptyCheck} alt="svg" />
  </div>
);

export default EmptyCheckbox;
