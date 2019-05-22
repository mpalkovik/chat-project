import React, { useState } from "react";
import { Icon } from "../Icon";
import minusIcon from "../../static/svg/minus.svg";
import plusIcon from "../../static/svg/plus.svg";
import { Button } from "../Button";

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div className="lg:pt-5 pt-3">
      <div className="pt-5 text-sm font-lato font-bold">Počet miest</div>
      <div className="pt-1 flex">
        <div className="flex justify-between" style={{ width: "168px" }}>
          <div className="w-10 h-10">
            <Button onClick={decrement} isStretched>
              <Icon src={minusIcon} className="w-6" />
            </Button>
          </div>
          <div className="h-10" style={{ width: "80px" }}>
            <Button isStretched>{counter}</Button>
          </div>
          <div className="w-10 h-10">
            <Button onClick={increment} isStretched>
              <Icon src={plusIcon} className="w-6" />
            </Button>
          </div>
        </div>
        <Button isInverted isStretched className="flex-1 ml-4">
          Rezervovať
        </Button>
      </div>
    </div>
  );
};
