import React from "react";
import menuIcon from "../../static/svg/menu.svg";
import { ImageHeader } from "./ImageHeader";

export const Menu = () => (
  <div className="inline-block lg:hidden">
    <ImageHeader src={menuIcon} className="ml-4" />
  </div>
);
