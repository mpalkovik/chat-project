import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { List } from "./List";

export const ScheduleFilter = () => {
  const [isShown, setShown] = useState(false);

  return (
    <div className="cursor-pointer">
      <div onClick={() => setShown(!isShown)}>
        <Dropdown isDisplayed={isShown} />
      </div>
      {isShown && <List />}
    </div>
  );
};
