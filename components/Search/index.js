import React from "react";
import style from "./style.scss";
import SelectZone from "../SelectZone";

class Search extends React.Component {
  render() {
    return (
      <div className={style.mainContainer}>
        <h2 className={style.searchTitle}>¡Volá con tu delivery online!</h2>
        <div className={style.searchContainer}>
          <div className={style.addressContainer}>
            <label>Dirección de entrega</label>
            <div className={style.address}>
              <i></i>
              <SelectZone />
              <input
                className={style.input}
                placeholder="Calle y número de puerta"
                type="text"
              />
            </div>
          </div>
          <div className={style.typeContainer}>
            <label>Restaurante o comida (opcional)</label>
            <div className={style.type}>
              <i></i>
              <input
                className={style.input}
                placeholder="ej. Burger King o pizza"
                type="text"
              />
            </div>
          </div>
          <div className={style.buttonContainer}>
            <button className={style.button}>Buscar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
