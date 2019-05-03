import React, { FC } from "react";

interface IProps {
  src: string;
  className?: string;
  style: string;
}

const PrimaryButton: FC<IProps> = style => (
  <button
    className="h-10 w-48 text-white font-lato text-base"
    style={prop.style}
  >
    Button Primary
  </button>
);

export default PrimaryButton;
