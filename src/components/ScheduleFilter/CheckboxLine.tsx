import React, { FC, useState } from "react";
import checkboxEmpty from "../../static/svg/icon-checkbox-empty.svg";
import checkboxChecked from "../../static/svg/icon-checkbox-checked.svg";

export const CheckboxLine: FC = ({ children }) => {
  const [image, setImage] = useState(false);

  return (
    <li
      className="flex justify-start items-center pl-4 pt-1 text-sm font-lato cursor-pointer"
      onClick={() => {
        setImage(!image);
      }}
    >
      {image ? <img src={checkboxChecked} /> : <img src={checkboxEmpty} />}
      <div>{children}</div>
    </li>
  );
};
