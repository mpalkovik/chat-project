export interface ICounterState {
  value: number;
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IActionIncrement {
  type: typeof INCREMENT;
  value: number;
}

export interface IActionDecrement {
  type: typeof DECREMENT;
  value: number;
}

export type CounterActionTypes = IActionIncrement | IActionDecrement;
