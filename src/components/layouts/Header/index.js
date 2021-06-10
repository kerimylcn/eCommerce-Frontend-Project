import Navigation from "../../shared-components/Navigation";
import DropDown from "../../shared-components/DropDown";
import Logo from "../../../assets/images/logo.png";
import { Search, User, Heart, Bag } from "../../../assets/icons/SVG";

import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="OSF Academy Logo" />
          <div className="header__logo--text">
            <span>OSF</span>
            <span>Academy</span>
          </div>
        </div>
        <Navigation />
        <ul className="header__icons">
          <li className="header__icons--item">
            <Search />
          </li>
          <li className="header__icons--item">
            <User />
          </li>
          <li className="header__icons--item">
            <Heart />
          </li>
          <li className="header__icons--item">
            <Bag />
          </li>
        </ul>
      </header>
      {/* <DropDown /> */}
    </>
  );
};

export default Header;
