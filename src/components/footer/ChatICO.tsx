import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";

const LatoBold = styled.div`
  font-size: 10px;
  font-family: Lato;
  font-weight: bold;
  font-style: normal;
  font-color: black;
`;

const ChatInfo = styled.div`
  width: 242px;
  height: 36px;
  display: inline-block;
  padding-left: 24px;
`;

const Lato = styled.div`
  font-size: 10px;
  font-family: Lato-Regular;
  font-weight: normal;
  font-style: normal;
  font-color: black;
  display: inline-block;
`;

const LucidaGrande = styled.div`
  font-size: 10px;
  font-family: LucidaGrande;
  font-weight: normal;
  font-style: normal;
  font-color: black;
  display: inline-block;
`;

const ChatICO: FC<RouteComponentProps> = () => (
  <div>
    <ChatInfo>
      <LatoBold>OZ CHAT - Centrum pre kreatívnu liečbu Arteterapiou</LatoBold>
      <LucidaGrande>IČO: 42407681</LucidaGrande>
      <LucidaGrande>Číslo účtu: VÚB SK13 0200 0000 0035 0237 4057</LucidaGrande>
    </ChatInfo>
  </div>
);

export default ChatICO;
