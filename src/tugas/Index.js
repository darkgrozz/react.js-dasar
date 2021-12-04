import React from "react";
import NavbarComponent from "./NavbarComponent";
import Table from "./Table";
import Formulir from "./Formulir";

export default class Crud extends React.Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <h2>Tambah Data</h2>
          <Formulir />
        </div>
        <div className="container mt-4">
          <Table />
        </div>
      </div>
    );
  }
}
