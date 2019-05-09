import React from "react";
import { Button } from "./Button";
import { Description } from "./Description";
import { Image } from "./Image";
import { Name } from "./Name";
import icon from "./homer.svg";

export const Thumbnail = () => {
  return (
    <div className="container ml-6">
      <div className="p-2 w-1/5 h-1/3 m-2 shadow mr-2 mb-2 block">
        <Image icon={icon} />
        <Name text="MAMA CHAT" />
        <Description text="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]" />
        <Button text="Zistiť viac" />
      </div>
    </div>
  );
};
