import React, { FC, useState } from "react";

export const Button: FC = ({}) => {
  const [text, setText] = useState("Všetky CHAT arteterapie");

  function handleTextChange() {
    setText("Filter");
  }

  return (
    <div>
      <p className="w-1/3" onClick={handleTextChange}>
        {text}
      </p>
    </div>
  );
};
