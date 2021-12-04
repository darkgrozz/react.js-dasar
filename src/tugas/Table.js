import React from "react";
import { Table, Container } from "react-bootstrap";

const makanans = [
  {
    nama: "ASUS ROG ZEPHYRUS G14 ",
    QTY: 10,
    harga: 17113950,
  },
  {
    nama: "Pavilion Gaming 15",
    QTY: 10,
    harga: 19300000,
  },
  {
    nama: "msi gl65 leopard ",
    QTY: 10,
    harga: 18000000,
  },
  {
    nama: " ASUS TUF GAMING",
    QTY: 10,
    harga: 16900000,
  },
  {
    nama: "Dell inspiron",
    QTY: 10,
    harga: 15500000,
  },
  {
    nama: " Acer Chromebook 514",
    QTY: 10,
    harga: 4000000,
  },
  {
    nama: "Acer nitro 5",
    QTY: 10,
    harga: 4774000000,
  },
  {
    nama: " Lenovo IdeaPad",
    QTY: 10,
    harga: 8500000,
  },
  {
    nama: "Macbook Pro",
    QTY: 10,
    harga: 54000000,
  },
  {
    nama: "Apple MacBook Air",
    QTY: 10,
    harga: 12200000,
  },
];

const Map = () => {
  return (
    <Container>
      <h2>Laptop Gaming Center</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>no</th>
            <th>nama</th>
            <th>qty</th>
            <th>harga</th>
            <th>Total harga</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{makanan.nama}</td>
              <td>{makanan.QTY}</td>
              <td>{makanan.harga}</td>
              <td>{makanan.QTY * makanan.harga}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Map;
