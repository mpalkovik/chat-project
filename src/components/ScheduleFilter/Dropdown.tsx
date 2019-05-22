import React, { FC } from "react";
import classnames from "classnames";
import DropIcon from "../../static/svg/icon-filter.svg";

interface IProps {
  isShown: boolean;
}

export const Dropdown: FC<IProps> = ({ isShown }) => {
  return (
    <div
      className={classnames(
        "w-full h-40 font-base font-lato bg-black text-white font-black flex justify-between items-center",
        {
          [`${isShown ? "rounded-t-xl pl-40" : "rounded-12 pl-12"}`]: true
        }
      )}
    >
      <div>{isShown ? "Filter" : "Všetky CHAT arteterapie"}</div>
      <img src={DropIcon} className="pr-8" />
    </div>
  );
};
