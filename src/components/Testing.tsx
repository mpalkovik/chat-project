import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Article } from "./ArticlePage/Articles";

export const Testing: FC<RouteComponentProps> = () => (
  <div>
    <Article />
  </div>
);
