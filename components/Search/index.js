import React from "react";
import style from "./style.scss";
import SelectZone from "../SelectZone";
import Link from "next/link";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
  }

  handleAddress(e) {
    const value = e.target.value;

    this.setState({
      address: value
    });
  }

  render() {
    const { address } = this.state;
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
                value={address}
                onChange={e => this.handleAddress(e)}
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
            <Link href={`/listado?direccion=${address}`}>
              <button className={style.button}>Buscar</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
