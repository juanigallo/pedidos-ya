import React from "react";
import style from "./style.scss";

class SelectZone extends React.Component {
  constructor(props) {
    super(props);

    //this.zones = ["Capital Federal", "25 de mayo", "Campana", "Corrientes"];

    this.state = {
      initialZones: [],
      selectedZone: "",
      active: false,
      zones: [],
      inputValue: ""
    };
  }

  async componentDidMount() {
    const getZones = await fetch("http://localhost:3000/api/zones");
    const getZonesJson = await getZones.json();

    this.setState({
      selectedZone: getZonesJson.length > 0 ? getZonesJson[0].name : "",
      zones: getZonesJson,
      initialZones: getZonesJson
    });
  }

  handleClick() {
    const currentState = this.state.active;

    this.setState({
      active: !currentState
    });
  }

  handleChange(position) {
    this.setState({
      selectedZone: this.state.zones[position].name,
      active: false,
      inputValue: "",
      zones: this.state.initialZones
    });
  }

  filterZones(e) {
    const value = e.target.value.toLowerCase();

    const result = this.state.initialZones.filter(zone => {
      return zone.name.toLowerCase().indexOf(value) > -1;
    });

    this.setState({
      inputValue: value,
      zones: result
    });
  }

  render() {
    const { selectedZone, active, zones, inputValue } = this.state;
    return (
      <div className={style.selectContainer}>
        <div onClick={() => this.handleClick()}>
          <span>{selectedZone}</span>
        </div>
        <div
          className={
            active
              ? `${style.listContainer} ${style.visible}`
              : style.listContainer
          }
        >
          <input
            onChange={e => this.filterZones(e)}
            type="text"
            placeholder="buscar ciudad..."
            value={inputValue}
            className={style.input}
          />
          <ul>
            {zones.map((zone, key) => {
              return (
                <li key={key} onClick={() => this.handleChange(key)}>
                  {zone.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectZone;
