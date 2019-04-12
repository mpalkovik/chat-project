import React, { FC } from "react";
import styled from "@emotion/styled";
import { white } from "../../style/colors";
import Icons from "./Icons";
import Title from "./Title";
import Description from "./Description";
import Button from "./Button";
import smallChildrenIcon from "../../static/svg/icon-therapy-type-deti-do-3-rokov.svg";
import childrenIcon from "../../static/svg/icon-therapy-type-deti-4-15.svg";
import adultIcon from "../../static/svg/icon-therapy-type-pre-dospelych.svg";
import individualIcon from "../../static/svg/icon-therapy-type-pre-dospelych-copy.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 1079px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 4px 16px 32px 0 rgba(0, 0, 0, 0.1);
  background-color: ${white};
`;
const HomepageList: FC = () => (
  <Wrapper>
    <Title title="Arteterapie" />
    <Description
      description=" Naše arteterapie sú vhodné pre deti, mládež ale aj dospelých so
        zdravotným znevýhodnením, problémami v učení, s poruchami správania
        alebo pre tých čo trpia traumami, stratami, smútkom, depresiou alebo
        vyhorením. Arteterapie vedia pomôcť tiež v medziľudských a rodinných
        vzťahoch."
    />
    <Icons src={smallChildrenIcon} backgroundColor="aquaBlue" />
    <Title title="Pre deti do 3 rokov" />
    <Icons src={childrenIcon} backgroundColor="butterScotch" />
    <Title title="Pre deti od 4 do 12 rokov" />
    <Icons src={adultIcon} backgroundColor="pinkyPurple" />
    <Title title="Pre dospelých" />
    <Icons src={individualIcon} backgroundColor="shamrockGreen" />
    <Title title="Individúalne hodiny" />
    <Button text="Všetky naše arteterapie" backgroundColor="white" />
  </Wrapper>
);
export default HomepageList;
