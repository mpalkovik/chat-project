import React from "react";
import { DayInfoMessage } from "../Schedule/DayInfoMessage";
import { ReservationInfo } from "../Schedule/ReservationInfo";
import { Reservation } from "../Schedule/Reservation";

export const Schedule = () => (
  <div style={{ width: "730px" }} className="shadow-lg m-auto pt-4 pb-6">
    <DayInfoMessage text={"Dnes - Pondelok 23. apríl"} />
    <div
      style={{ maxWidth: "680px" }}
      className="flex flex-row justify-between"
    >
      <div>
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
      <div>
        <Reservation
          availability={"Obsadenosť"}
          numbers={"4/8"}
          numberOfPlace={"Počet miest"}
        />
      </div>
    </div>
    <div
      style={{ width: "682px" }}
      className="ml-6 pt-8 border-b border-solid border-lilac"
    />
  </div>
);
