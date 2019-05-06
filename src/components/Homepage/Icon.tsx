import React, { FC } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

interface IProps {
  src: string;
  url: string;
  title: string;
  to: string;
}
const Oval: any = styled.span`
  background-image: url(${(props: any) => props.url});
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
`;
const Icon: FC<IProps> = ({ src, url, title, to }) => (
  <Link className="p-6 no-underline m-1" to={to}>
    <Oval url={url}>
      <img src={src} />
    </Oval>
    <div className="w-full font-lato font-bold text-center text-black pt-4">
      {title}
    </div>
  </Link>
);
export default Icon;
