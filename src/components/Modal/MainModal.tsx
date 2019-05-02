import React, { FC } from "react";

const MainModale: FC = props => (
  <div
    style={{
      width: "343px",
      height: "420px"
    }}
    className="pt-4 pb-6 border-black border m-auto flex flex-col justify-between"
  >
    {props.children}
  </div>
);

export default MainModale;
