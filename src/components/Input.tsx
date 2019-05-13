import React, { FC } from "react";

interface IProps {
  name: string;
}

export const Input: FC<IProps> = ({ name }) => (
  <div>
    <p className="text-sm text-grey font-lato mb-2 mt-3">{name}</p>
    <input
      type="text"
      placeholder="Zadajte Váš email"
      className="w-full h-10 font-lato text-base text-sm hover:shadow-lg pl-4 border-solid border border-black rounded-xl"
    />
  </div>
);
