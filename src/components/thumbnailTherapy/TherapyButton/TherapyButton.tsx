import React, { FC } from "react";

interface IButton {
  text: string;
}

const TherapyButton: FC<IButton> = ({ text }) => {
  return (
    <button className="rounded-lg bg-transparent w-full h-10 font-black font-lato text-black hover:text-white hover:bg-black text-black font-black">
      {text}
    </button>
  );
};

export default TherapyButton;
