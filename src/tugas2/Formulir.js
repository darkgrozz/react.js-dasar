import React from "react";
import { Row, Col, Form, Button, Container, Card } from "react-bootstrap";

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit }) => {
  return (
    <div className="mt-3">
      <Container>
        <Card style={{ backgroundColor: "purple" }}>
          <Row>
            <Col>
              <h2
                style={{
                  color: "white",
                  fontFamily: "cursive",
                  textAlign: "center",
                }}
              >
                Tambah Laptop
              </h2>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit} style={{ padding: "30px" }}>
                <Form.Group className="mb-3" controlId="nama">
                  <Form.Label style={{ color: "white" }}>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="nama"
                    value={nama}
                    onChange={(event) => handleChange(event)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="deskripsi">
                  <Form.Label style={{ color: "white" }}>QTY</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    name="deskripsi"
                    value={deskripsi}
                    onChange={(event) => handleChange(event)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label style={{ color: "white" }}>Harga</Form.Label>
                  <Form.Control
                    type="number"
                    name="harga"
                    value={harga}
                    onChange={(event) => handleChange(event)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Tambah
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Formulir;
