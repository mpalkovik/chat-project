import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import phone from "../../static/svg/icon-phone.svg";

const Phone: FunctionComponent = () => (
  <div>
    <img
      src={phone}
      alt="svg"
      style={{ paddingBottom: "-18px", paddingRight: "8px" }}
    />
  </div>
);

export default Phone;
