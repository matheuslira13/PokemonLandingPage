import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles.scss";
import logo from "../../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HeaderProps } from "./types";

export const transferInformationState = (e?: boolean) => {
  return e;
};

export const Header = ({ link1, link2, link3 }: HeaderProps) => {
  const [OnOff, setOnOff] = useState(true);
  const [mobile, setMobile] = useState("menuMobileOff");
  const [iconMenu, setIconMenu] = useState("");

  const handleChangeMenuState = () => {
    transferInformationState(!OnOff);
    setOnOff(!OnOff);
    if (OnOff) {
      setMobile("menuMobileOn");
      setIconMenu("hamburgueIconMenuClose");
    } else {
      setMobile("menuMobileOff");
      setIconMenu("");
    }
  };
  return (
    <div className="containerHeader">
      <Link to="#home">
        <img
          className={`containerImgLogo ${iconMenu}`}
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        />
      </Link>

      <GiHamburgerMenu
        className={`hamburgueIconMenu ${iconMenu}`}
        onClick={handleChangeMenuState}
      />

      <nav className="menuDesktop">
        <ul className="container">
          <li>
            <Link to="/#pokedex">{link1}</Link>
          </li>
          <li>
            <Link to="#typePokemons">{link2}</Link>
          </li>
          <li>
            <Link to="#newsletter">{link3}</Link>
          </li>
        </ul>
      </nav>
      <div className={mobile}>
        <nav>
          <IoClose className="closeIconMenu" onClick={handleChangeMenuState} />
          <ul>
            <li>
              <Link to="/#pokedex">{link1}</Link>
            </li>
            <li>
              <Link to="#typePokemons">{link2}</Link>
            </li>
            <li>
              <Link to="#newsletter">{link3}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
