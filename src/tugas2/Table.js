import React from "react";
import { Table, Container } from "react-bootstrap";

const table = ({ bukus, editData, hapusData }) => {
  return (
    <Container>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Laptop</th>
            <th>QTY</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bukus.map((buku, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{buku.nama}</td>
                <td>{buku.deskripsi}</td>
                <td>{buku.harga}</td>
                <td>{buku.deskripsi * buku.harga}</td>
                <td>
                  <button
                    style={{ backgroundColor: "green" }}
                    className="btn btn-primary"
                    onClick={() => editData(buku.id)}
                  >
                    Edit
                  </button>{" "}
                  ||
                  <button
                    style={{ marginLeft: "5px", backgroundColor: "red" }}
                    className="btn btn-primary"
                    onClick={() => hapusData(buku.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default table;
