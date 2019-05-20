import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button } from "./Button";
import { Expanded } from "./Expanded";

export const Filter: FC<RouteComponentProps> = () => {
  return (
    <div className="w-1/3">
      <Button classname="pl-10 mb-2" />
      <Expanded classname="pl-4" />
    </div>
  );
};
