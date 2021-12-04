import React from "react";
import { Card, Button } from "react-bootstrap";
const Footer = () => {
  return (
    <Card className="text-center" bg="lime" variant="darkblue">
      <Card.Header>GAMING</Card.Header>
      <Card.Body>
        <Card.Title>REPUBLIK OF GAMERS</Card.Title>
        <Card.Text></Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default Footer;
