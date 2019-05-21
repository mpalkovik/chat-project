import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer";
interface IProps {
  children?: React.ReactNode;
}
export const Layout = (props: IProps) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
