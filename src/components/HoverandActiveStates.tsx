import React, { FC } from "react";
import PrimaryButton from "../components/PrimaryButton";

const HoverandActiveStates: FC = () => (
  <div>
    <div className="font-gilbert">
      <h1 className="flex items-center justify-center ">buttons</h1>
      <div className="text-xl">normal</div>
      <PrimaryButton inverted={true} />
      <div className="text-xl">hover</div>
      <PrimaryButton />
      <div className="text-xl">pressed</div>
      <PrimaryButton />
    </div>
    <div className="font-gilbert">
      <h1 className="flex items-center justify-center">input fields</h1>
      <div className="text-xl">normal</div>
      <div className="text-xl">hover</div>
      <div className="text-xl">pressed</div>
    </div>
  </div>
);

export default HoverandActiveStates;
