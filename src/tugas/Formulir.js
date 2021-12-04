import React from "react";
import { Row, Col, Form, Button, Container, Card } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className="mt-3">
      <Container>
        <Card bg="dark">
          <Row>
            <Col>
              <Form style={{ padding: "30px" }}>
                <Form.Group className="mb-3" controlId="nama">
                  <Form.Label style={{ color: "white" }}>
                    Nama Laptop
                  </Form.Label>
                  <Form.Control type="text" name="nama" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="deskripsi">
                  <Form.Label style={{ color: "white" }}>Deskripsi</Form.Label>
                  <Form.Control as="textarea" rows="3" name="deskripsi" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="harga">
                  <Form.Label style={{ color: "white" }}>
                    Harga Laptop
                  </Form.Label>
                  <Form.Control type="number" name="harga" />
                </Form.Group>
                <center>
                  <Button variant="primary" type="submit">
                    Tambah
                  </Button>
                </center>
              </Form>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Formulir;
