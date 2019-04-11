import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import email from "../../static/svg/email.svg";

const Email: FunctionComponent = () => (
  <span>
    <img
      src={email}
      alt="svg"
      style={{ paddingBottom: "-18px", paddingRight: "8px" }}
    />
  </span>
);

export default Email;
