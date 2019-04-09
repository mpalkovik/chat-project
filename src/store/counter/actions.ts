import { DECREMENT, INCREMENT } from "./types";

export const incrementAction = (value = 1) => ({
  type: INCREMENT,
  value
});

export const decrementAction = (value = 1) => ({
  type: DECREMENT,
  value
});
