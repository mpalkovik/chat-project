import React, { FC } from "react";
import { decrementAction, incrementAction } from "../store/counter/actions";
import { AppState } from "../store";
import { connect } from "react-redux";
import { RouteComponentProps } from "@reach/router";

interface IProps {
  counter: number;
  incrementAction: typeof incrementAction;
  decrementAction: typeof decrementAction;
}

const Counter: FC<IProps & RouteComponentProps> = ({
  counter,
  incrementAction,
  decrementAction
}) => {
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => incrementAction(1)}>+</button>
      <button onClick={() => decrementAction(2)}>-</button>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementAction,
  decrementAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
