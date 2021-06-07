import { useAppContext } from "../../../context/state";

import Navigation from "../../shared-components/Navigation";

import Logo from "../../../assets/images/logo.png";
import { Search, User, Heart, Bag } from "../../../assets/icons/SVG";

import "./header.scss";

const Header = () => {
  const state = useAppContext();
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
          <li>
            <Search />
          </li>
          <li>
            <User />
          </li>
          <li>
            <Heart />
          </li>
          <li>
            <Bag />
          </li>
        </ul>
      </header>
      <ul>{state.isDropDown ? "dropdownacik" : "dropdownkapali"}</ul>
    </>
  );
};

export default Header;
