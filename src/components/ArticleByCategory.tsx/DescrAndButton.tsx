import React from "react";
import { Button } from "../Button";
import { Description } from "../Homepage/Description";

export const DescAndButton = () => (
  <h1 className="font-gilbert text-4xl">
    <Description>Pri viacmesačnom predpladtnom zľava až 20%</Description>
    <span className="bg-white pr-8 pl-8">
      <Button className="mt-4">Nakup kreditov</Button>
    </span>
  </h1>
);
