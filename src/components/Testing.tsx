import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Article } from "./ArticlePage/Article";

export const Testing: FC<RouteComponentProps> = () => (
  <div>
    <Article />
  </div>
);
