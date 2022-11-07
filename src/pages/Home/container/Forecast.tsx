import { PureComponent } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { PageLoader } from "pages/common";
import { IAppState } from "config/redux/reducers";
import { IAction } from "config/redux/types/redux.types";

import { ForecastList, ForecastHeader } from "../components";
import { IForecastData, IForecastParams, ECities } from "../redux/types";
import { getForecast } from "../redux/action/forecast.action";
import "./forecast.less";

interface IMappedStateProps {
  results: IForecastData[] | [];
  loading: boolean;
}

interface IActionProps {
  getForecast: (city: IForecastParams) => void;
}

interface IProps extends IMappedStateProps, IActionProps {}

interface IState {
  city: string;
}

class ForecastContainer extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      city: ECities.TORONTO,
    };
  }

  getCityForeCast = (): void => {
    const {
      props: { getForecast },
      state: { city },
    } = this;
    getForecast({ city });
  };

  componentDidMount(): void {
    this.getCityForeCast();
  }

  onClick = (city: string) => (): void => {
    this.setState({ city }, () => this.getCityForeCast());
  };

  render() {
    const {
      props: { results, loading },
      state: { city },
    } = this;

    return (
      <div className="container">
        {loading ? (
          <PageLoader />
        ) : (
          <>
            <ForecastHeader city={city} onClick={this.onClick} />
            <ForecastList data={results} />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: IAppState): IMappedStateProps => {
  return {
    ...state.forecast,
  };
};

const mapDisptachToProps = (
  dispatch: ThunkDispatch<IAppState, {}, IAction>
): IActionProps => ({
  getForecast: (city: IForecastParams) => dispatch(getForecast(city)),
});

export default connect(mapStateToProps, mapDisptachToProps)(ForecastContainer);
