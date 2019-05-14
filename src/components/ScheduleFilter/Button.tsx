import React, { FC, useState } from "react";

export const Button: FC = () => {
  const [text, setText] = useState("Všetky CHAT arteterapie");

  function handleTextChange() {
    setText("Filter");
  }

  return (
    <button>
      <ul onClick={handleTextChange}>{text}</ul>
    </button>
  );
};
