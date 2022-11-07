import { EApiActionTypes } from "config/redux/types/api.types";
import IAction from "./interface";

export const apiStart = (label: string, payload: any = null): IAction => ({
  type: `${label}${EApiActionTypes.API_START}`,
  payload,
});

export const apiEnd = (label: string, payload: any = null): IAction => ({
  type: `${label}${EApiActionTypes.API_END}`,
  payload,
});

export const apiSuccess = (label: string, payload: any = null): IAction => ({
  type: `${label}${EApiActionTypes.API_SUCCESS}`,
  payload,
});

export const apiError = (label: string, error: any): IAction => ({
  type: `${label}${EApiActionTypes.API_FAIL}`,
  payload: error,
});

export const accessDenied = (payload: any = null): IAction => ({
  type: EApiActionTypes.ACCESS_DENIED,
  payload: JSON.stringify(payload),
});
