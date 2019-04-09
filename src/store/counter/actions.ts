import {
  DECREMENT,
  INCREMENT,
  IActionIncrement,
  IActionDecrement
} from "./types";

export const incrementAction = (value = 1): IActionIncrement => ({
  type: INCREMENT,
  value
});

export const decrementAction = (value = 1): IActionDecrement => ({
  type: DECREMENT,
  value
});
