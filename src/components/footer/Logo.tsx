import React, { FC, ReactNode } from "react";

interface ILogo {
  className?: string;
  children?: ReactNode;
}

const ChatLogo: FC = (props: ILogo) => (
  <div className="flex items-center w-64 h-16">
    <div className="text-4xl font-gilbert font-bold color-black pl-6">CHAT</div>
    <div className="text-sm font-gilbert font-bold color-black flex:block">
      <div>Centrum pre</div>
      <div>kreatívnu liečbu</div>
      <div>arteterapiou</div>
    </div>
  </div>
);

export default ChatLogo;
