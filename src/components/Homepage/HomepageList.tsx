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
    margin: 50px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  background-color: ${white};
  position: relative;
  padding: 1.5em 0em 1.5em 0em;
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
const TitleWrapper = styled.div`
  @media (min-width: 840px) {
    padding: 1.5em 10em 1.5em 10em;
  }
  padding: 1.5em;
`;
const HomepageList = () => (
  <Wrapper>
    <Text fontSize={31} fontFamily="Gilbert" text="Arteterapie" />
    <TitleWrapper>
      <Text
        fontSize={16}
        fontFamily="Lato"
        text="Naše arteterapie sú vhodné pre deti, mládež ale aj dospelých so zdravotným znevýhodnením, problémami v učení, s poruchami správania alebo pre tých čo trpia traumami, stratami, smútkom, depresiou alebo vyhorením. Arteterapie vedia pomôcť tiež v medziľudských a rodinných vzťahoch."
      />
    </TitleWrapper>
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
