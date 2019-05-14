import React, { FC } from "react";

interface IProps {
  availability: string;
  numbers: string;
  numberOfPlace: string;
}

export const Reservation: FC<IProps> = ({
  availability,
  numbers,
  numberOfPlace
}) => (
  <div className="pt-5">
    <div className="flex flex-row">
      <div className="text-sm font-lato font-bold">{availability}</div>
      <div
        style={{ marginLeft: "215px" }}
        className="text-sm font-lato font-bold"
      >
        {numbers}
      </div>
    </div>
    <div
      style={{ width: "310px" }}
      className="pt-2 border-b border-solid border-lilac"
    />
    <div className="pt-6 text-sm font-lato font-bold">{numberOfPlace}</div>
    <div className="pt-1 flex flex-row">
      <button className="border-black border font-gilbert w-10 h-10 rounded-lg text-4xl">
        <div>-</div>
      </button>
      <button className="ml-1 border-black border font-bold w-20 h-10 rounded-lg text-base font-lato">
        1
      </button>
      <button className="ml-1 border-black border font-gilbert w-10 h-10 rounded-lg text-center text-4xl">
        <div>+</div>
      </button>
      <button
        style={{ width: "135px" }}
        className="ml-4 bg-black font-bold h-10 rounded-lg "
      >
        <div className="text-white font-lato">Rezervovať</div>
      </button>
    </div>
  </div>
);
