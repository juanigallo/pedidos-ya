import React from "react";
import Navbar from "../Navbar";

import style from "./style.scss";

class ListHeader extends React.Component {
  constructor(props) {
    super(props);

    this.randomImages = [
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/milanesa-2.jpg",
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/milanesa-1.jpg",
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/burger-7.jpg",
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/burger-5.jpg",
      "https://images.deliveryhero.io/image/pedidosya/header-backgrounds/burger-1.jpg"
    ];
  }

  randomizeBackground() {
    const maxLength = this.randomImages.length;
    const index = Math.floor(Math.random() * (maxLength - 1));

    return this.randomImages[index];
  }

  render() {
    const { backgroundImg, address, shopsQty } = this.props;
    const backgroundImage = backgroundImg
      ? backgroundImg
      : this.randomizeBackground();
    return (
      <header
        className={style.header}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className={style.innerWrapper}>
          <Navbar />
          <h3>
            {shopsQty} locales para {address}
          </h3>
        </div>
      </header>
    );
  }
}

export default ListHeader;
