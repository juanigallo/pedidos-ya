import React from "react";
import style from "./style.scss";

class ShopCard extends React.Component {
  render() {
    const { name, address, img, category } = this.props;
    return (
      <div className={style.cardContainer}>
        <div className={style.leftContainer}>
          <div className={style.imgContainer}>
            <img src={img} />
          </div>
          <div className={style.dataContainer}>
            <h4>{name}</h4>
            <h5>
              {address} - {category}
            </h5>
          </div>
        </div>
        <div className={style.rightContainer}>
          <button className={style.buttonContainer}>Ver productos</button>
        </div>
      </div>
    );
  }
}

export default ShopCard;
