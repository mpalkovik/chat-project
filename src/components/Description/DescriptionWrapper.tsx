import React, { FC } from "react";

export const DescriptionWrapper: FC = ({ children }) => {
  return (
    <div className="w-full m-auto text-center pt-24 pb-24 pr-2 pl-2 lg:w-2/3">
      {children}
    </div>
  );
};
