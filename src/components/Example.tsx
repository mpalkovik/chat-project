import React, { FC } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "@reach/router";
import test from "../static/svg/icon-power-off.svg";

const GilbertColor = styled.div`
  font-family: "Gilbert Color", serif;
  font-size: 45px;
  font-weight: bold;
  font-style: normal;
`;

const Gilbert = styled.div`
  font-family: "Gilbert", serif;
  font-size: 45px;
  font-weight: bold;
  font-style: normal;
`;

export const Example: FC<RouteComponentProps> = () => (
  <div>
    <GilbertColor>
      CHAT ponúka individuálne arteterapie pre deti, dospelých a rodiny.
    </GilbertColor>
    <Gilbert>
      CHAT ponúka individuálne arteterapie pre deti, dospelých a rodiny.
    </Gilbert>

    <img src={test} alt="svg" />
  </div>
);
