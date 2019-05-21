import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { ScheduleFilter } from "./ScheduleFilter/ScheduleFilter";
import { Thumbnail } from "./Thumbnail/Thumbnail";
import icon from "../static/svg/homer.svg";

export const Testing: FC<RouteComponentProps> = () => (
  <div>
    <ScheduleFilter />
    <Thumbnail
      name="MAMA CHAT"
      icon={icon}
      alt="super"
      description="Kreatívne a uvoľnujúce aktivity, aby ste si oddýchli, spracovali emócie […]"
    />
  </div>
);
