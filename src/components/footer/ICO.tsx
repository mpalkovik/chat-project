import React, { ReactNode } from "react";
import styled from "@emotion/styled";

interface IChat {
  className?: string;
  children?: ReactNode;
}

const Street = styled.div`
  width: 270px;
  height: 36px;
`;

const ChatICO = (props: IChat) => (
  <Street className="pt-5 pl-6">
    <div className="text-xs font-lato font-black">
      OZ CHAT - Centrum pre kreatívnu liečbu Arteterapiou
    </div>
    <div className="text-xs font-lato font-normal color-black">
      <div>IČO: 42407681</div>
      <div>Číslo účtu: VÚB SK13 0200 0000 0035 0237 4057</div>
    </div>
  </Street>
);

export default ChatICO;
