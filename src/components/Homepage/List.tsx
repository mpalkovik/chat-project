import React from "react";
import Button from "./Button";
import Icon from "./Icon";
import smallChildrenIcon from "../../static/svg/icon-therapy-type-deti-do-3-rokov.svg";
import childrenIcon from "../../static/svg/icon-therapy-type-deti-4-15.svg";
import adultIcon from "../../static/svg/icon-therapy-type-pre-dospelych.svg";
import individualIcon from "../../static/svg/icon-therapy-type-pre-dospelych-copy.svg";
import blueOval from "../../static/svg/blueOval.svg";
import orangeOval from "../../static/svg/orangeOval.svg";
import pinkOval from "../../static/svg/pinkOval.svg";
import greenOval from "../../static/svg/greenOval.svg";

const HomepageList = () => (
  <div className="flex flex-col items-center m-0 bg-white relative p-6 lg:m-12 text-center">
    <h1 className="font-gilbert text-2xl">Arteterapie</h1>
    <h4 className="pt-6 pb-8 font-lato font-normal lg:w-3/4  ">
      Naše arteterapie sú vhodné pre deti, mládež ale aj dospelých so zdravotným
      znevýhodnením, problémami v učení, s poruchami správania alebo pre tých čo
      trpia traumami, stratami, smútkom, depresiou alebo vyhorením. Arteterapie
      vedia pomôcť tiež v medziľudských a rodinných vzťahoch.
    </h4>
    <div className="flex flex-col relative w-full lg:flex-row justify-center">
      <Icon
        src={smallChildrenIcon}
        url={blueOval}
        title="Pre deti do 3 rokov"
        to="smallChildren"
      />
      <Icon
        src={childrenIcon}
        url={orangeOval}
        title="Pre deti od 4 do 12 rokov"
        to="children"
      />
      <Icon src={adultIcon} title="Pre dospelých" to="adults" url={pinkOval} />
      <Icon
        src={individualIcon}
        title="Individúalne hodiny"
        to="individials"
        url={greenOval}
      />
    </div>
    <div className="w-64 mt-5 border border-solid rounded-lg bg-white text-black font-black">
      <Button text="Všetky naše arteterapie" />
    </div>
  </div>
);
export default HomepageList;
