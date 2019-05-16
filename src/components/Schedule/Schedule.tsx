import React from "react";
import { DayInfoMessage } from "../Schedule/DayInfoMessage";
import { ReservationInfo } from "../Schedule/ReservationInfo";
import { Reservation } from "../Schedule/Reservation";

export const Schedule = () => (
  <div
    style={{ maxWidth: "730px", width: "100%" }}
    className="shadow-lg m-auto pt-4"
  >
    <div className="w-full">
      <DayInfoMessage text={"Dnes - Pondelok 23. apríl"} />
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-1/2">
          <ReservationInfo
            time={"16:00"}
            chatName={"Kids CHAT"}
            doctorName={"Terapeutka Linda"}
            place={"Miestnosť č.4"}
            minut={"90 minút"}
            cost={"Cena:"}
            price={"10€"}
          />
        </div>
        <div className="w-full pl-6 pr-6 lg:w-1/2">
          <Reservation
            availability={"Obsadenosť"}
            numbers={"4/8"}
            numberOfPlace={"Počet miest"}
          />
        </div>
        <div className="lg:mx-6 lg:pt-6 pt-4 border-b border-solid border-lilac w-full" />
      </div>
    </div>
  </div>
);
