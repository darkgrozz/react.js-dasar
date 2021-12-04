import React from "react";
import { Table, Container } from "react-bootstrap";

const table = ({ bukus, editData, hapusData }) => {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Buku</th>
            <th>Deskripsi</th>
            <th>Harga Buku</th>
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
                <td>Rp {buku.harga}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => editData(buku.id)}
                  >
                    Edit
                  </button>
                  <button
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
