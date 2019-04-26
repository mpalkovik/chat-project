import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import Homepage from "../components/Homepage/HomepageContainer";

const Home: FC<RouteComponentProps> = () => (
  <div>
    <Homepage />
  </div>
);

export default Home;
