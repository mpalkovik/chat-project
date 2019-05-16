import React, { FC } from "react";

interface IProps {
  time: string;
  chatName: string;
  doctorName: string;
  place: string;
  minut: string;
  cost: string;
  price: string | number;
}

export const ReservationInfo: FC<IProps> = ({
  time,
  chatName,
  doctorName,
  place,
  minut,
  cost,
  price
}) => (
  <div className="pt-4">
    <div className="flex flex-row">
      <div className="text-xl ml-6 mt-1 font-gilbert">{time}</div>
      <div
        style={{ borderBottomWidth: "34px" }}
        className="ml-2 w-px border-solid border-lilac"
      />
      <div className="text-xl ml-2 mt-1 font-gilbert">{chatName}</div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "72px" }}
        className="text-sm font-lato text-grey"
      >
        {doctorName}
      </div>
      <div
        style={{ borderBottomWidth: "24px" }}
        className=" ml-2 w-px border-solid border-lilac"
      />
      <div className="ml-2 text-sm font-lato text-grey">{place}</div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "72px" }}
        className="text-sm font-lato text-grey"
      >
        {minut}
      </div>
      <div
        style={{ borderBottomWidth: "24px" }}
        className=" ml-1 w-px border-solid border-lilac"
      />
      <div className="ml-1 text-sm font-lato text-grey">{cost}</div>
      <div className="ml-1 text-lg font-gilbert">{price}</div>
    </div>
  </div>
);
