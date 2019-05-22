import React, { FC } from "react";

interface IProps {
  date: string;
  therapyName: string;
  doctorName: string;
  place: string;
  therapyLength: number;
  price: number;
}

export const ReservationInfo: FC<IProps> = ({
  date,
  therapyName,
  doctorName,
  place,
  therapyLength,
  price
}) => (
  <div className="pt-4">
    <div className="flex">
      <div className="text-xl font-gilbert border-solid border-1 pt-px pr-2 pb-3 border-lilac border-r">
        {date}
      </div>
      <div className="text-xl ml-2 mt-px font-gilbert">{therapyName}</div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "54px" }}
        className="text-sm font-lato text-grey border-solid border-1 p-1 pr-2 border-lilac border-r"
      >
        Terapeutka {doctorName}
      </div>

      <div className="ml-2 text-sm font-lato text-grey">
        Miestnosť č.{place}
      </div>
    </div>
    <div className="flex flex-row items-center">
      <div
        style={{ marginLeft: "54px" }}
        className="mt-px text-sm font-lato text-grey border-solid border-1 p-1 pr-2 border-lilac border-r"
      >
        {therapyLength} minút
      </div>
      <div className="mt-px ml-1 text-sm font-lato text-grey">Cena:</div>
      <div className="mt-px ml-1 text-lg font-gilbert">{price}€</div>
    </div>
  </div>
);
