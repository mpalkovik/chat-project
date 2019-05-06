import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import LandingPage from "./Homepage/LandingPage";

const Home: FC<RouteComponentProps> = () => (
  <div>
    <LandingPage />
  </div>
);

export default Home;
