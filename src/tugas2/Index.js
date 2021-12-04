import React from "react";
import NavbarComponent from "./NavbarComponent";
import Table from "./Table";
import Formulir from "./Formulir";
import Footer from "./Footer";

export default class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bukus: [
        {
          nama: "ASUS ROG ZEPHYRUS G14 ",
          deskripsi: 10,
          harga: 17113950,
        },
        {
          nama: "Pavilion Gaming 15",
          deskripsi: 10,
          harga: 19300000,
        },
        {
          nama: "msi gl65 leopard ",
          deskripsi: 10,
          harga: 18000000,
        },
        {
          nama: " ASUS TUF GAMING",
          deskripsi: 10,
          harga: 16900000,
        },
        {
          nama: "Dell inspiron",
          deskripsi: 10,
          harga: 15500000,
        },
        {
          nama: " Acer Chromebook 514",
          deskripsi: 10,
          harga: 4000000,
        },
        {
          nama: "Acer nitro 5",
          deskripsi: 10,
          harga: 4774000000,
        },
        {
          nama: " Lenovo IdeaPad",
          deskripsi: 10,
          harga: 8500000,
        },
        {
          nama: "Macbook Pro",
          deskripsi: 10,
          harga: 54000000,
        },
        {
          nama: "Apple MacBook Air",
          deskripsi: 10,
          harga: 12200000,
        },
      ],
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        bukus: [
          ...this.state.bukus,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const bukuYangSelainDipilih = this.state.bukus
        .filter((buku) => buku.id !== this.state.id)
        .map((filterBuku) => {
          return filterBuku;
        });
      this.setState({
        bukus: [
          ...bukuYangSelainDipilih,
          {
            id: this.state.bukus.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }
    this.setState({
      nama: "",
      deskripsi: "",
      harga: "",
      id: "",
    });
  };
  editData = (id) => {
    const bukuYangDipilih = this.state.bukus
      .filter((buku) => buku.id === id)
      .map((filterBuku) => {
        return filterBuku;
      });
    this.setState({
      nama: bukuYangDipilih[0].nama,
      deskripsi: bukuYangDipilih[0].deskripsi,
      harga: bukuYangDipilih[0].harga,
      id: bukuYangDipilih[0].id,
    });
  };

  hapusData = (id) => {
    const bukuBaru = this.state.bukus
      .filter((buku) => buku.id !== id)
      .map((filterBuku) => {
        return filterBuku;
      });

    this.setState({
      bukus: bukuBaru,
    });
  };
  // console.log(this.state.bukus);
  render() {
    return (
      <div style={{ backgroundColor: "red" }}>
        <NavbarComponent />
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>
          Computer Gaming Center
        </h1>
        <div className="Container mt-4">
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Table
            bukus={this.state.bukus}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
