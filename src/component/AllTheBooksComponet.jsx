import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import Fantasy from "../arc/fantasy.json";
// import History from "../arc/history.json";
// import Romance from "../arc/romance.json";
// import Horror from "../arc/horror.json";
// import Scifi from "../arc/scifi.json";

class AllTheBooksComponent extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {Fantasy.map((book) => {
              return (
                <Col className="col-4" key={book.asin}>
                  <Card style={{ width: "18rem", margin: "1em" }}>
                    <Card.Img
                      style={{ height: "400px" }}
                      variant="top"
                      src={book.img}
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Button variant="primary">Click here</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooksComponent;
