import React, { FC } from "react";

interface IProps {
  time: string;
  therapyName: string;
  doctorName: string;
  place: string;
  therapyLength: number;
  price: number;
}

export const ReservationInfo: FC<IProps> = ({
  time,
  therapyName,
  doctorName,
  place,
  therapyLength,
  price
}) => (
  <div className="pt-4">
    <div className="flex">
      <div className="text-xl mt-1 font-gilbert">{time}</div>
      <div
        style={{ borderBottomWidth: "34px" }}
        className="ml-2 w-px border-solid border-lilac"
      />
      <div className="text-xl ml-2 mt-1 font-gilbert">{therapyName}</div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "57px" }}
        className="text-sm font-lato text-grey"
      >
        Terapeutka {doctorName}
      </div>
      <div
        style={{ borderBottomWidth: "24px" }}
        className=" ml-2 w-px border-solid border-lilac"
      />
      <div className="ml-2 text-sm font-lato text-grey">
        Miestnosť č.{place}
      </div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "57px" }}
        className="text-sm font-lato text-grey"
      >
        {therapyLength} minút
      </div>
      <div
        style={{ borderBottomWidth: "24px" }}
        className=" ml-1 w-px border-solid border-lilac"
      />
      <div className="ml-1 text-sm font-lato text-grey">Cena:</div>
      <div className="ml-1 text-lg font-gilbert">{price}€</div>
    </div>
  </div>
);
