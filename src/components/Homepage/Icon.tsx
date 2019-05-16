import React, { FC } from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { BackgroundImage } from "./BackgroundImage";

interface IProps {
  src: string;
  url: string;
  title: string;
  to: string;
}
export const Icon: FC<IProps> = ({ src, url, title, to }) => (
  <Link className="p-6 no-underline m-1" to={to}>
    <BackgroundImage url={url}>
      <img src={src} />
    </BackgroundImage>
    <div className="w-full font-lato font-bold text-center text-black pt-4">
      {title}
    </div>
  </Link>
);
