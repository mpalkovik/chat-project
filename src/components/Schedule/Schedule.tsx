import React from "react";
import { DayInfoMessage } from "../Schedule/DayInfoMessage";
import { Reservation } from "./Reservation";

export const Schedule = () => {
  const data = [
    {
      id: 7,
      attendants: 4,
      maxAttendants: 8,
      date: "16:00",
      price: 10,
      timeLength: 90,
      room: "4",
      therapeutName: "Linda",
      name: "Kids CHAT"
    },
    {
      id: 6,
      attendants: 2,
      maxAttendants: 6,
      date: "14:00",
      price: 20,
      timeLength: 60,
      room: "6",
      therapeutName: "Peter",
      name: "DADY CHAT"
    }
  ];
  return (
    <div
      style={{ maxWidth: "730px", width: "100%" }}
      className="shadow-lg m-auto pt-4"
    >
      <div className="w-full">
        <DayInfoMessage text="Dnes - Pondelok 23. apríl" />
        {data.map(terapy => {
          return (
            <div
              key={terapy.id}
              className="border-b border-solid border-lilac pl-6 pr-6 lg:pb-6 pb-4"
            >
              <Reservation {...terapy} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
