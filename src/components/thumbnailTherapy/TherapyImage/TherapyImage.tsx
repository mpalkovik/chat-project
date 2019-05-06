import React, { FC } from "react";
import icon from "./homer.svg";

interface IImage {
  icon: string;
}
const TherapyImage: FC<IImage> = ({ icon }) => {
  return <img className="mb-2" alt="therapy-Image" src={icon} />;
};

export default TherapyImage;
