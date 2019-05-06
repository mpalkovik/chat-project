import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledInput = styled.div`
  width: 391px;
  height: 40px;
`;

export const Input: FC = () => (
  <StyledInput>
    <p className="text-sm text-grey font-lato mb-2 mt-3">Email</p>
    <input
      type="text"
      placeholder="Zadajte Váš email"
      className={`w-full h-full font-lato text-base text-sm hover:shadow-lg pl-4`}
      style={{
        borderRadius: "12px",
        borderColor: "black",
        borderWidth: "1px",
        outline: "0"
      }}
    />
  </StyledInput>
);
