import React from "react";

export default class Mobil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobil: "bmw, gtr, rx7",
    };
  }
  gantiMobil = (mobil_baru) => {
    this.setState({
      mobil: mobil_baru,
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.mobil}</h2>
        <button
          onClick={() => this.gantiMobil("toyota supra mk 4, camaro zl1,")}
        >
          Ganti Mobil
        </button>
      </div>
    );
  }
}
