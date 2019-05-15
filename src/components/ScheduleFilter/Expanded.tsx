import React from "react";

export const Expanded = () => {
  const CheckBoxes = [
    "Všetko",
    "Baby CHAT",
    "Kids CHAT",
    "Relax CHAT",
    "Clay CHAT",
    "Move CHAT"
  ];

  const listBoxes = CheckBoxes.map(checkbox => (
    <li key={checkbox}>
      <input type="checkbox" key={checkbox} />
      {checkbox}
    </li>
  ));

  return (
    <div>
      <ul>{listBoxes}</ul>
    </div>
  );
};
