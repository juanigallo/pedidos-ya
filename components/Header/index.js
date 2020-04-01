import React from "react";
import style from "./style.scss";
import Navbar from "../Navbar";
import Search from "../Search";

class Header extends React.Component {
  render() {
    const { backgroundImg } = this.props;
    return (
      <header
        style={{
          backgroundImage: `url(${backgroundImg})`
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
