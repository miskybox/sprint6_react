// Budget.jsx
import { Card } from 'react-bootstrap';

function Budget({ name, mail, tel, service, price, pages, languages }) {
 return (
    <Card className="w-96 bg-light text-dark mt-3 px-3 py-2">
      <Card.Body>
        <Card.Title className="font-weight-bold">{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{mail}</Card.Subtitle>
        <Card.Text>{tel}</Card.Text>
        <Card.Text className="font-weight-bold mr-2">Serveis contractats:</Card.Text>
        <Card.Text>{service.join(", ")}</Card.Text>
        <Card.Text className="font-weight-bold mr-2">Número de pàgines:</Card.Text>
        <Card.Text>{pages}</Card.Text>
        <Card.Text className="font-weight-bold mr-2">Número de llenguatges:</Card.Text>
        <Card.Text>{languages}</Card.Text>
        <Card.Text className="font-weight-bold mr-5">Total:</Card.Text>
        <Card.Text className="font-weight-bold">{price}€</Card.Text>
      </Card.Body>
    </Card>
 );
}

export default Budget;


