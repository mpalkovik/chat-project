import React, { FC } from "react";
import classnames from "classnames";
import DropIcon from "../../static/svg/icon-filter.svg";

interface IProps {
  show: boolean;
}

export const Dropdown: FC<IProps> = ({ show }) => {
  return (
    <div
      className={classnames(
        "w-full h-10 font-base font-lato bg-black text-white font-black flex justify-between items-center",
        {
          [`${show ? "rounded-t-xl pl-10" : "rounded-xl pl-3"}`]: true
        }
      )}
    >
      <div>{show ? "Filter" : "Všetky CHAT arteterapie"}</div>
      <img src={DropIcon} className="pr-2" />
    </div>
  );
};