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

export const List = () => (
  <ul className="rounded-b-xl border-2 border border-solid pb-6 absolute pin-x bg-white pl-0">
    {data.map(text => (
      <CheckboxLine key={text}>{text}</CheckboxLine>
    ))}
  </ul>
);
