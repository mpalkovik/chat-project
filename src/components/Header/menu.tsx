import React from "react";
import menuIcon from "../../static/svg/menu.svg";
import ImageHeader from "./ImageHeader";

const Menu = () => (
  <div className="inline-block lg:hidden">
    <ImageHeader src={menuIcon} marginLeft={16} />
  </div>
);

export default Menu;
