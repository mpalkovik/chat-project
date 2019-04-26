import React, { FC } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import oval from "../../static/svg/oval.svg";

interface IProps {
  src: string;
  title: string;
  to: string;
}
const Oval = styled.span`
  background-image: url(${oval});
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
`;
const Icon: FC<IProps> = ({ src, title, to }) => (
  <Link className="p-6 no-underline m-3" to={to}>
    <Oval>
      <img src={src} />
    </Oval>
    <h4 className="w-full font-lato text-center text-black pt-4">{title}</h4>
  </Link>
);
export default Icon;
