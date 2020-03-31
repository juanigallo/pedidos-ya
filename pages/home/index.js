import React from "react";
import style from "./style.scss";
import Header from "../../components/Header";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header backgroundImg="https://images.deliveryhero.io/image/pedidosya/home-backgrounds/home-background-ar.jpg" />
      </div>
    );
  }
}

export default Index;
