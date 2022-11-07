import { combineReducers } from "redux";
import apiReducer, { IApiState, initialApiState } from "./api.reducer";
import forecastReducer, {
  IForecastState,
  initialForecastState,
} from "pages/Home/redux/reducer/forecast.reducer";

export interface IAppState {
  api: IApiState;
  forecast: IForecastState;
}

export const initialAppState = {
  api: initialApiState,
  forecast: initialForecastState,
};

const rootReducer = combineReducers({
  api: apiReducer,
  forecast: forecastReducer,
});

export default rootReducer;
