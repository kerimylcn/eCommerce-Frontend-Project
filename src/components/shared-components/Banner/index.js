import "./banner.scss";
import BannerImage from "../../../assets/images/banner/solobanner.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__text--container">
        <div>
          <h1>Banner OSF Theme</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptaten
            accusantium
          </p>
        </div>
      </div>
      <img src={BannerImage} alt="OSF Banner" />
    </div>
  );
};

export default Banner;
