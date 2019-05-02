import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import Homepage from "../components/Homepage/Container";

const Home: FC<RouteComponentProps> = () => (
  <div>
    <Homepage />
  </div>
);

export default Home;
