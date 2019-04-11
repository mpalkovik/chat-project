import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import place from "../../static/svg/icon-place.svg";

const Place: FunctionComponent = () => (
  <div>
    <img src={place} alt="svg" style={{ paddingBottom: "25px" }} />
  </div>
);

export default Place;
