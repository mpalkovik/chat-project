import React from "react";
import TherapyButton from "./TherapyButton/TherapyButton";
import TherapyDescription from "./TherapyDescription/TherapyDescription";
import TherapyImage from "./TherapyImage/TherapyImage";
import TherapyName from "./TherapyName/TherapyName";

const Therapy = () => {
  return (
    <div className="container ml-6 ">
      <div className="p-2 w-1/5 h-1/3 m-2 shadow mr-2 mb-2 block ">
        <TherapyImage />
        <TherapyName />
        <TherapyDescription />
        <TherapyButton />
      </div>
    </div>
  );
};

export default Therapy;
