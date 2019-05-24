import React from "react";
import background from "../../static/svg/backgroundImage.svg";
import { AllArticles } from "./AllArticles";
import { BackgroundImage } from "../Homepage/BackgroundImage";
import { Description } from "../Homepage/Description";
import { DescAndButton } from "./DescrAndButton";

export const Container = () => (
  //   <BackgroundImage url={background} isCover>
  <div className="bg-red">
    <div className="w-full m-auto text-center pt-10">
      <Description>Chcete sa dozvedieť viac o arteterapii?</Description>
    </div>
    <AllArticles />
    <div className="w-full m-auto text-center pt-10">
      <DescAndButton />
    </div>
  </div>
  //   </BackgroundImage>
);
