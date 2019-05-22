import React, { FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Dropdown } from "./Dropdown";
import { List } from "./List";

export const ScheduleFilter: FC<RouteComponentProps> = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="cursor-pointer">
      <div onClick={() => setShow(!show)}>
        <Dropdown show={show} />
      </div>
      {show && <List />}
    </div>
  );
};
