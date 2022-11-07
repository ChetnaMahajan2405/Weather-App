import cx from "classnames";
import { ECities } from "../../redux/types";
import "./forecastHeader.less";

interface IProps {
  city: string;
  onClick: (city: string) => () => void;
}

const ForecastHeader = ({ city, onClick }: IProps) => (
  <div className="forecast-header-container">
    {(Object.keys(ECities) as Array<keyof typeof ECities>).map((key) => {
      const currentCity = ECities[key];
      const selected = currentCity === city;
      return (
        <p
          className={cx("header", {
            selected: selected,
          })}
          key={key}
          onClick={onClick(currentCity)}
        >
          {key}
        </p>
      );
    })}
  </div>
);

export default ForecastHeader;
