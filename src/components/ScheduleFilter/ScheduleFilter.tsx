import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { List } from "./List";

export const ScheduleFilter = () => {
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
