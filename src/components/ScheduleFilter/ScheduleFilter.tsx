import React, { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Wrapper } from "./Wrapper";
import { List } from "./List";

export const ScheduleFilter: FC<RouteComponentProps> = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-1/3 relative cursor-pointer">
      <div onClick={() => setShow(!show)}>
        <Wrapper show={show} />
      </div>
      {show && <List />}
    </div>
  );
};
