import { EApiActionTypes } from "../types/api.types";
import { IAction } from "../types/redux.types";

export interface IApiState {
  error?: {};
  accessDenied?: {};
}

export const initialApiState = {};

const apiReducer = (
  state: IApiState = initialApiState,
  action: IAction
): IApiState => {
  switch (action.type) {
    case EApiActionTypes.API_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case EApiActionTypes.ACCESS_DENIED:
      return {
        ...state,
        accessDenied: action.payload,
      };
  }

  return state;
};

export default apiReducer;
