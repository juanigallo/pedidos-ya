import React from "react";
import style from "./style.scss";
import Navbar from "../Navbar";
import Search from "../Search";

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          backgroundImage: `url(${this.props.backgroundImg})`
        }}
        className={style.header}
      >
        <Navbar />
        <Search />
      </header>
    );
  }
}

export default Header;
