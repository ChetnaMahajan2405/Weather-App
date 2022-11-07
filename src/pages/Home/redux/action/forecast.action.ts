import { IAction, TDispatch } from "config/redux/types/redux.types";
import { EApiMiddlewareMethods } from "config/redux/middleware/api.middleware.types";
import {
  EForecastActionTypes,
  IForecastData,
  IForecastParams,
  GET_FORECAST_FAILURE,
  GET_FORECAST_SUCCESS,
} from "../types";
import { isNonEmptyArray } from "utils/helpers.utils";
import { API_KEY, FORECAST_URL } from "constants/api.url";

export const setForeCastData = (payload: IForecastData[]): IAction => ({
  type: GET_FORECAST_SUCCESS,
  payload,
});

const transform = (data: IForecastData[]) => {
  return data.map(({ temp, datetime, weather }) => ({
    temp,
    datetime,
    weather,
  }));
};

export const getForecast =
  ({ city }: IForecastParams) => (dispatch: TDispatch<any>) => {
    dispatch({
      type: EForecastActionTypes.GET_FORECAST,
      payload: {
        method: EApiMiddlewareMethods.POST,
        onSuccess: (payload: { data: IForecastData[] }) => {
          if (isNonEmptyArray(payload.data)) {
            dispatch(setForeCastData(transform(payload.data)));
          }
        },
        onFailure: () => dispatch({ type: GET_FORECAST_FAILURE }),
        url: FORECAST_URL,
        params: {
          key: API_KEY,
          city,
        },
      },
    });
  };
