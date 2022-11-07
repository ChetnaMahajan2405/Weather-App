export interface IAction<P = any, T = string> {
  type: T;
  payload?: P;
}

export type TDispatch<A = IAction, R = any> = (args: A) => R;
