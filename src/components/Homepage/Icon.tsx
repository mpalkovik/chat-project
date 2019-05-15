import React, { FC } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

interface IProps {
  src: string;
  url: string;
  title: string;
  to: string;
}
interface IOval {
  url: string;
}
const Oval = styled.div<IOval>`
  background: url(${props => props.url}) no-repeat center;
  display: inline-block;
  background-position: center;
`;
export const Icon: FC<IProps> = ({ src, url, title, to }) => (
  <Link className="p-6 no-underline m-1" to={to}>
    <Oval url={url}>
      <img src={src} />
    </Oval>
    <div className="w-full font-lato font-bold text-center text-black pt-4">
      {title}
    </div>
  </Link>
);
