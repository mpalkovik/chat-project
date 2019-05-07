import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { LandingPage } from "./Homepage/LandingPage";

export const Home: FC<RouteComponentProps> = () => (
  <div>
    <LandingPage />
  </div>
);
