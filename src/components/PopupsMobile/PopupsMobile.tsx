import React, { FC } from "react";

const StyledWrapper: React.CSSProperties = {
  width: "343px",
  height: "420px"
};

const Wrapper: React.CSSProperties = {
  minHeight: "380px"
};

const Modal: FC = props => (
  <div style={StyledWrapper} className="pt-4 pb-6 border-black border m-auto">
    <div style={Wrapper} className="flex flex-col justify-between">
      {props.children}
    </div>
  </div>
);

export default Modal;
