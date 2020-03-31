import React from "react";
import style from "./style.scss";

class Navbar extends React.Component {
  render() {
    return (
      <nav className={style.nav}>
        <div className={style.logoContainer}>
          <img src="https://live.pystatic.com/webassets/common/logo-es-3f7be267ae60c49c55f747799efa5753.svg" />
        </div>
        <ul className={style.listContainer}>
          <li>Ayuda en linea</li>
          <li>Registrate</li>
          <li>Ingresa</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
