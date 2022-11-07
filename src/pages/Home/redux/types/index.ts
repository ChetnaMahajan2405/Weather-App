import { EApiActionTypes } from "config/redux/types/api.types";

export enum ECities {
  TORONTO = "Toronto,CA",
  VANCOUVER = "Vancouver,CA",
  OTTAWA = "Ottawa,CA",
}

export const enum EForecastActionTypes {
  GET_FORECAST = "WAETHER_APP/GET_FORECAST",
}

export interface IForecastParams {
  city: string;
}

export interface IForecastData {
  temp: number;
  datetime: string;
  weather: {
    description: string;
    code: number;
    icon: string;
  };
}

export const GET_FORECAST_START = `${EForecastActionTypes.GET_FORECAST}${EApiActionTypes.API_START}`;
export const GET_FORECAST_SUCCESS = `${EForecastActionTypes.GET_FORECAST}${EApiActionTypes.API_SUCCESS}`;
export const GET_FORECAST_FAILURE = `${EForecastActionTypes.GET_FORECAST}${EApiActionTypes.API_FAIL}`;
