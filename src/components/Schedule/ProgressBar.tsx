import React, { FC } from "react";

interface IProps {
  currentReservation: number;
  maxReservation: number;
}

export const ProgressBar: FC<IProps> = ({
  currentReservation,
  maxReservation
}) => (
  <div>
    <div className="flex justify-between pt-6">
      <div className="text-sm font-lato font-bold">Obsadenosť</div>
      <div className="flex content-end">
        <div className="text-sm font-lato font-bold">{currentReservation}/</div>
        <div className="text-sm font-lato font-bold">{maxReservation}</div>
      </div>
    </div>
    <div className="pt-2 border-b border-solid border-lilac relative flex items-center">
      <div className="border-b border-solid w-1/2 border-2 border-black inline-block absolute" />
    </div>
  </div>
);
