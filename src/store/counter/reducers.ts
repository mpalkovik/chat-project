import {
  INCREMENT,
  DECREMENT,
  ICounterState,
  CounterActionTypes
} from "./types";

const initialState: ICounterState = {
  value: 0
};

export function counterReducer(
  state = initialState,
  action: CounterActionTypes
): ICounterState {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + action.value
      };
    case DECREMENT:
      return {
        value: state.value - action.value
      };
    default:
      return state;
  }
}
