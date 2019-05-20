import React, { FC } from "react";
import classnames from "classnames";

interface IProps {
  classname?: string;
}

const CheckBoxes = [
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

const listBoxes = CheckBoxes.map(list => (
  <li key={list} className="mb-2">
    <input type="checkbox" key={list} />
    {list}
  </li>
));

export const Expanded: FC<IProps> = ({ classname }) => {
  return (
    <div>
      <ul className={classnames("font-lato", classname)}>{listBoxes}</ul>
    </div>
  );
};
