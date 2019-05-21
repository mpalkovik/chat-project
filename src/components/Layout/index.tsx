import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer";
import background from "../../static/svg/backgroundImage.svg";
import { BackgroundImage } from "../Homepage/BackgroundImage";
interface IProps {
  children?: React.ReactNode;
}
export const Layout = (props: IProps) => (
  <>
    <Header />
    <BackgroundImage url={background} isCover>
      <div style={{ maxWidth: "1280px" }}>{props.children}</div>
    </BackgroundImage>
    <Footer />
  </>
);
