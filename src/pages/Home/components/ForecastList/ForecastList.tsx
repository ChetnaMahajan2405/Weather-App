import React from "react";
import { Image } from "pages/common";
import { LOGO_URL } from "constants/api.url";
import { isNonEmptyArray } from "utils/helpers.utils";
import { IForecastData } from "../../redux/types";
import moment from "moment";
import "./forecastList.less";

interface IProps {
  data: IForecastData[] | [];
}

const ForecastList = ({ data }: IProps) => {
  const today = moment().format("l");
  return (
    <div className="forecast-list-container">
      {isNonEmptyArray(data) ? (
        <>
          {data.map((d: IForecastData, index) => {
            const date = moment(d.datetime);
            const isToday = today === date.format("l");
            const src = `${LOGO_URL}/${d.weather.icon}.png`;

            return (
              <div key={d.datetime} className="tile">
                <div className="inner-tile">
                  <div className="day">
                    {isToday ? "Today" : date.format("ddd")}
                  </div>

                  <div className="inner-data">
                    <div className="image-wrapper">
                      <Image
                        src={src}
                        alt={d.weather.icon}
                        className="image-icon"
                      />
                    </div>
                    <div>
                      <div className="temperature">{d.temp}&deg;</div>
                      {!index && (
                        <div className="description">
                          {d.weather.description}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="tile">
          <div className="inner-tile">
            <div className="day">Sorry! No results found.</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForecastList;
