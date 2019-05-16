import React, { FC, useState } from "react";

interface IProps {
  availability: string;
  numbers: string;
  numberOfPlace: string;
}

export const Reservation: FC<IProps> = ({
  availability,
  numbers,
  numberOfPlace
}) => {
  const [counter, setCounter] = useState(1);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  return (
    <div className="lg:pt-5 pt-3">
      <div className="flex justify-between">
        <div className="text-sm font-lato font-bold">{availability}</div>
        <div className="flex content-end text-sm font-lato font-bold">
          {numbers}
        </div>
      </div>
      <div className="pt-2 border-b border-solid border-lilac" />
      <div className="pt-4 text-sm font-lato font-bold">{numberOfPlace}</div>
      <div className="pt-1 flex flex-row">
        <button
          onClick={decrement}
          className="border-black border font-gilbert w-10 h-10 rounded-lg text-4xl"
        >
          <div>-</div>
        </button>
        <div className="ml-1 border-solid border-black border font-bold w-10 h-10 lg:w-20 rounded-lg text-base font-lato flex justify-center items-center">
          {counter}
        </div>
        <button
          onClick={increment}
          className="ml-1 border-black border font-gilbert w-10 h-10 rounded-lg text-4xl"
        >
          <div>+</div>
        </button>
        <button className="ml-4 bg-black font-bold rounded-lg w-3/5">
          <div className="text-white font-lato">Rezervovať</div>
        </button>
      </div>
    </div>
  );
};
