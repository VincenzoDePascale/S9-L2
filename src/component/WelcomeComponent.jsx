import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WelcomeComponent() {
  return (
    <Card className="m-5">
      <Card.Header>Jumbotron</Card.Header>
      <Card.Body>
        <Card.Title>Lorem ipsum dolor</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          accusantium dignissimos saepe non enim harum dolor. Earum iusto,
          perspiciatis fugit quas atque distinctio animi rerum, aut expedita
          adipisci soluta dicta!
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
  );
}

export default WelcomeComponent;
