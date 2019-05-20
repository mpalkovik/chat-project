import React, { FC, useState } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}

export const Button: FC<IProps> = ({ classname }) => {
  const [text, setText] = useState("Všetky CHAT arteterapie");

  function handleTextChange() {
    setText("Filter");
  }

  return (
    <div>
      <button
        className={classnames(
          "w-full text-justify h-10 rounded-xl font-base font-lato bg-black text-white font-black",
          classname
        )}
        onClick={handleTextChange}
      >
        {text}
      </button>
    </div>
  );
};
