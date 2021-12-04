import React from "react";

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

const total_bayar = makanans.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Map = () => {
  return (
    <div>
      <h2>Laptop Gaming Center</h2>
      <table>
        <tr>
          <th>no</th>
          <th>nama</th>
          <th>qty</th>
          <th>harga</th>
          <th>Total harga</th>
        </tr>
        {makanans.map((makanan, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{makanan.nama}</td>
            <td>{makanan.QTY}</td>
            <td>{makanan.harga}</td>
            <td>{makanan.QTY * makanan.harga}</td>
          </tr>
        ))}
      </table>
      <h2>Map filter harga yang lebih dari 11.000.000</h2>
      <ul>
        {makanans
          .filter((makanan) => makanan.harga > 11000000)
          .map((makanan, index) => (
            <p>
              {index + 1}. {makanan.nama} - harga {makanan.harga}
            </p>
          ))}
      </ul>

      <h3>Total Bayar : {total_bayar}</h3>
    </div>
  );
};

export default Map;
