import React from "react";
import { white } from "../../style/colors";
import styled from "@emotion/styled";
import Text from "../Text";
import Button from "./Button";
import Icons from "./Icons";
import smallChildrenIcon from "../../static/svg/icon-therapy-type-deti-do-3-rokov.svg";
import childrenIcon from "../../static/svg/icon-therapy-type-deti-4-15.svg";
import adultIcon from "../../static/svg/icon-therapy-type-pre-dospelych.svg";
import individualIcon from "../../static/svg/icon-therapy-type-pre-dospelych-copy.svg";

const Wrapper = styled.div`
  @media (min-width: 840px) {
    margin: 56px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: ${white};
  position: relative;
  padding: 24px;
`;
const IconWrapper = styled.div`
  @media (min-width: 840px) {
    flex-direction: row;
    justify-content: center;
  }
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
const DescrWrapper = styled.div`
  @media (min-width: 840px) {
    padding: 16px 320px 16px 320px;
  }
  padding: 16px;
`;
const HomepageList = () => (
  <Wrapper>
    <Text fontSize={31} fontFamily="Gilbert" text="Arteterapie" />
    <DescrWrapper>
      <Text
        fontSize={16}
        fontFamily="Lato"
        text="Naše arteterapie sú vhodné pre deti, mládež ale aj dospelých so zdravotným znevýhodnením, problémami v učení, s poruchami správania alebo pre tých čo trpia traumami, stratami, smútkom, depresiou alebo vyhorením. Arteterapie vedia pomôcť tiež v medziľudských a rodinných vzťahoch."
      />
    </DescrWrapper>
    <IconWrapper>
      <Icons
        src={smallChildrenIcon}
        backgroundColor="aquaBlue"
        title="Pre deti do 3 rokov"
      />
      <Icons
        src={childrenIcon}
        backgroundColor="butterScotch"
        title="Pre deti od 4 do 12 rokov"
      />
      <Icons
        src={adultIcon}
        backgroundColor="pinkyPurple"
        title="Pre dospelých"
      />
      <Icons
        src={individualIcon}
        backgroundColor="shamrockGreen"
        title="Individúalne hodiny"
      />
    </IconWrapper>
    <Button text="Všetky naše arteterapie" />
  </Wrapper>
);
export default HomepageList;
