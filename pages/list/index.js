import React from "react";
import ListHeader from "../../components/ListHeader";
import axios from "axios";
import ShopCard from "../../components/ShopCard";

import style from "./style.scss";

class List extends React.Component {
  static async getInitialProps({ req, query }) {
    const address = req.query.direccion ? req.query.direccion : "";

    const shopsData = await axios("http://localhost:3000/api/shops");

    return {
      address,
      shops: shopsData.data
    };
  }

  render() {
    const { address, shops } = this.props;

    return (
      <React.Fragment>
        <ListHeader address={address} shopsQty={shops.length} />
        <section className={style.mainContainer}>
          {shops.map((shop, key) => {
            return <ShopCard {...shop} key={key} />;
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default List;
