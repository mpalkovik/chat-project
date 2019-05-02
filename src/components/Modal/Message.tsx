import React, { FC } from "react";

interface IProps {
  text: string;
}

const Message: FC<IProps> = ({ text }) => (
  <div className="ml-6 mt-20 font-gilbert text-2xl">{text}</div>
);

export default Message;