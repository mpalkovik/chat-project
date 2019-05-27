import React, { FC } from "react";
import { Button } from "../Button";
import { Description } from "../Description/Description";

interface IProps {
  isLogged?: boolean;
}

export const DescAndButton: FC<IProps> = ({ isLogged }) => (
  <div>
    {isLogged ? (
      <div>
        <Description>Pri viacmesačnom predpladtnom zľava až 20%</Description>
        <span className="bg-white p-16">
          <Button isInverted>Nákup kreditov</Button>
        </span>
      </div>
    ) : (
      <div>
        <Description>
          Vyskúšajte si CHAT. Registrujte sa a získajte prvú hodinu zdarma.
        </Description>
        <span className="bg-white p-16">
          <Button isInverted>Registrovať sa</Button>
        </span>
      </div>
    )}
  </div>
);
