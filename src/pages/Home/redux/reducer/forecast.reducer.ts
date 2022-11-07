import { IAction } from "config/redux/types/redux.types";
import {
  GET_FORECAST_START,
  GET_FORECAST_FAILURE,
  GET_FORECAST_SUCCESS,
  IForecastData,
} from "../types";

export const initialForecastState = {
  loading: false,
  results: [],
};

export interface IForecastState {
  loading: boolean;
  results: IForecastData[] | [];
}

const forecastReducer = (
  state: IForecastState = initialForecastState,
  action: IAction
): IForecastState => {
  switch (action.type) {
    case GET_FORECAST_START:
      return {
        results: [],
        loading: true,
      };

    case GET_FORECAST_SUCCESS:
      return {
        loading: false,
        results: action.payload,
      };

    case GET_FORECAST_FAILURE:
      return { ...initialForecastState };
  }

  return state;
};

export default forecastReducer;
