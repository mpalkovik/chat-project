import React, { FC } from "react";

interface IProps {
  currentReservation: number;
  maxReservation: number;
}

export const AvailabilityBar: FC<IProps> = ({
  currentReservation,
  maxReservation
}) => {
  return (
    <>
      <div className="flex justify-between pt-6 text-sm font-lato font-bold">
        <div>Obsadenosť</div>
        <div className="flex content-end">
          <div>{currentReservation}/</div>
          <div>{maxReservation}</div>
        </div>
      </div>
      <div className="pt-2 border-b border-solid border-lilac relative flex items-center">
        <div
          style={{ width: (currentReservation / maxReservation) * 100 + "%" }}
          className="border-b border-solid border-2 border-black inline-block absolute"
        />
      </div>
    </>
  );
};
