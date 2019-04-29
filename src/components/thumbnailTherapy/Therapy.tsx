import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import TherapyButton from "./TherapyButton/TherapyButton";
import TherapyDescription from "./TherapyDescription/TherapyDescription";
import TherapyImage from "./TherapyImage/TherapyImage";
import TherapyName from "./TherapyName/TherapyName";


  box-shadow: 4px 16px 32px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--white);


const Therapy: FC<RouteComponentProps> = () => {
  return (
    <div className="bg-white " width={230} height={304} bc->
      <TherapyImage />
      <TherapyName />
      <TherapyDescription />
      <TherapyButton />
    </div>
  );
};

export default Therapy;
