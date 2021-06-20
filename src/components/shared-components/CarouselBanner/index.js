import { useState } from "react";
import { FacebookBlue } from "../../../assets/icons/SVG";
import { useAppContext } from "../../../context/state";
import BannerImages from "../../../assets/images/banner/bannerimages";

import "./carouselbanner.scss";

const CarouselBanner = () => {
  const state = useAppContext();
  const [navigationValue, setNavigationValue] = useState(0);
  const onClickHandler = (e) => {
    return setNavigationValue(parseInt(e.target.value));
  };

  const header = "Control and manage any device with cloud solutions";
  const paragraph =
    "Improve business performance and the user experience with the right mix of IoT technology and process";

  return (
    <div className="carousel__container">
      <div className="carousel__banner__container">
        <div
          className="carousel__banner--wrapper"
          style={
            navigationValue === 0 && state.size > 322
              ? { marginLeft: "0" }
              : navigationValue === 1 && state.size > 322
              ? { marginLeft: "-62.5rem" }
              : navigationValue === 2 && state.size > 322
              ? { marginLeft: "-125rem" }
              : navigationValue === 3 && state.size > 322
              ? { marginLeft: "0" }
              : navigationValue === 4 && state.size > 322
              ? { marginLeft: "0" }
              : navigationValue === 0 && state.size < 323
              ? { marginLeft: "0" }
              : navigationValue === 1 && state.size < 323
              ? { marginLeft: "-16.1rem" }
              : navigationValue === 2 && state.size < 323
              ? { marginLeft: "-32.2rem" }
              : navigationValue === 3 && state.size < 323
              ? { marginLeft: "0" }
              : navigationValue === 4 && state.size < 323
              ? { marginLeft: "0" }
              : { color: "black" }
          }
        >
          <div className="carousel__banner--item1">
            <div>
              <h1>{header}</h1>
              <p>{paragraph}</p>
              <button> VIEW MORE</button>
            </div>
            <img src={BannerImages.banner1}></img>
          </div>
          <div className="carousel__banner--item2">
            <div>
              <h1>{header}</h1>
              <p>{paragraph}</p>
              <button> VIEW MORE</button>
            </div>
            <img src={BannerImages.banner2}></img>
          </div>
          <div className="carousel__banner--item3">
            <div>
              <h1>{header}</h1>
              <p>{paragraph}</p>
              <button> VIEW MORE</button>
            </div>
            <img src={BannerImages.banner3}></img>
          </div>
        </div>
        <ul className="carousel__navigation">
          <li>
            <input
              type="radio"
              name="foo"
              value={0}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={1}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={2}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={3}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
          <li>
            <input
              type="radio"
              name="foo"
              value={4}
              onClick={(e) => onClickHandler(e)}
            ></input>
          </li>
        </ul>
      </div>
      <div className="carousel__side--wrapper">
        <div className="carousel__side--discount">
          <h1>55%</h1>
          <p>SUMMER SALES </p>
        </div>
        <div classname="carousel__side--text">
          <p style={{ marginTop: "2rem" }}>Follow us on Facebook</p>
          <p style={{ fontSize: "0.9rem" }}>
            Sed ut perspiciatis unde omnis iste natus error sit
          </p>
        </div>
        <a href="https://www.facebook.com/OSFDigital/" target="_blank">
          <button>
            <FacebookBlue />
            FOLLOW
          </button>
        </a>
      </div>
    </div>
  );
};

export default CarouselBanner;
