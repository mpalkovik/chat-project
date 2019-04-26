import React, { FC } from "react";
import logo from "../../static/svg/gilbert-color-font@3x.png";

const Logo: FC = () => (
  <div className="hidden lg:flex flex-row justify-center m-auto pt-32 pb-32 md:flex ">
    <img src={logo} className="w-2/5 lg:w-1/5" />
    <h1 className="font-gilbert text-4xl w-2/5 lg:w-1/5">
      Centrum pre kreatívnu liečbu arteterapiou
    </h1>
  </div>
);
export default Logo;
