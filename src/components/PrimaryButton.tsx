import React, { FC } from "react";

interface IProps {
  src: string;
  className?: string;
  inverted: boolean;
}

const PrimaryButton: FC = ({inverted}) => (
  <button {inverted ? 'black' : 'white'}
    className={`h-10 w-48 text-white font-lato text-base bg-${inverted ? 'black' : 'white'}`}
    style={{ borderRadius: "12px" }}
  >
    Button Primary
  </button>
);

export default PrimaryButton;
