import React from "react";
import { CheckboxLine } from "./CheckboxLine";

const data = [
  "Všetko",
  "Baby CHAT",
  "Kids CHAT",
  "Relax CHAT",
  "Clay CHAT",
  "Move CHAT",
  "Terapeutické projektívne karty",
  "Wine and Paint",
  "Pet CHAT",
  "Mandala",
  "Coaching CHAT",
  "Skills CHAT",
  "Indivindi"
];

export const List = () => {
  return (
    <div className="rounded-b-xl border-2 border border-solid pb-6 absolute pin-x bg-white">
      {data.map(text => (
        <CheckboxLine key={text}>{text}</CheckboxLine>
      ))}
    </div>
  );
};
