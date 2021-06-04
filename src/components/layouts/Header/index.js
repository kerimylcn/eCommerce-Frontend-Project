import Navigation from "../../shared-components/Navigation";
import Logo from "../../../assets/images/logo.png";
import "./header.scss";
import { Search, User, Heart, Bag } from "../../../assets/icons/SVG";

const Header = () => {
  return (
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
  );
};

export default Header;
