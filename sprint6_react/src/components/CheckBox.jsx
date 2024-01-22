//CheckBox.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import Budget from './Budget';

const CheckBox = ({ boxes }) => {
  const [selectedServices, setSelectedServices] = useState(
    boxes.map(() => false)
  );
  const [pages, setPages] = useState(1);
  const [languages, setLanguages] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showBudget, setShowBudget] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [budgets, setBudgets] = useState([]);
  const [cleanAll, setCleanAll] = useState(false);

  useEffect(() => {
    const newTotalPrice = boxes.reduce((acc, box, index) => {
      if (selectedServices[index]) {
        acc += box.price + pages * 30 + languages * 10;
      }
      return acc;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [selectedServices, pages, languages, boxes]);

  const handleServiceChange = (index) => {
    const newSelectedServices = [...selectedServices];
    newSelectedServices[index] = !newSelectedServices[index];
    setSelectedServices(newSelectedServices);
  };

  const handlepagesChange = (event) => {
    setPages(parseInt(event.target.value, 10));
  };

  const handlelanguagesChange = (event) => {
    setLanguages(parseInt(event.target.value, 10));
  };

  const handleShowBudget = () => {
    setShowBudget(true);
    setBudgets((prevBudgets) => [
      ...prevBudgets,
      {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        services: boxes
          .filter((box, index) => selectedServices[index])
          .map((box) => box.title),
          pages: pages, 
          languages: languages, 
          price: totalPrice,
       
      },
    ]);
  };

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleGoBack = () => {
    setShowBudget(false);
    setSelectedServices(boxes.map(() => false));
    setPages(1);
    setLanguages(1);
    setTotalPrice(0);
    setUserData({ name: "", email: "", phone: "" });
  };

  const handleCleanAll = () => {
    setCleanAll(true);
    setBudgets([]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <Card>
          <Card.Body>
            <h2>Aconsegueix la millor qualitat</h2>
          </Card.Body>
        </Card>
        <Link to="/" className="btn btn-secondary m-8">
          Tornar a l'inici
        </Link>
      </div>

      <div className="container mt-4">
        <Card>
          <Card.Body>
            <h2>Aconsegueix la millor qualitat</h2>
            {boxes.map((box, index) => (
              <Form.Check
                key={box.title}
                type="checkbox"
                label={`Hacer una campaña ${box.title} (${box.price} €)`}
                checked={selectedServices[index]}
                onChange={() => handleServiceChange(index)}
              />
            ))}
            <Form.Group>
              <Form.Label>Número de pàgines:</Form.Label>
              <Form.Control
                type="number"
                value={pages}
                onChange={handlepagesChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Número de llenguatges:</Form.Label>
              <Form.Control
                type="number"
                value={languages}
                onChange={handlelanguagesChange}
              />
            </Form.Group>
            <p>Preu pressuposat: {totalPrice} €</p>
            <Button variant="primary" onClick={handleShowBudget}>
              Demanar pressupost
            </Button>
            {showBudget && (
              <>
                <Button
                  variant="secondary"
                  onClick={handleGoBack}
                  className="ml-2"
                >
                  Demanar un nou pressupost
                </Button>
                <Button
                  variant="danger"
                  onClick={handleCleanAll}
                  className="ml-2"
                >
                  Esborrar dades
                </Button>
                <Form>
                  <Form.Group>
                    <Form.Label>Nom:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Introduïu el vostre nom"
                      name="name"
                      value={userData.name}
                      onChange={handleUserDataChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Introduïu el vostre email"
                      name="email"
                      value={userData.email}
                      onChange={handleUserDataChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Teléfon:</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Introduïu el vostre telèfon"
                      name="phone"
                      value={userData.phone}
                      onChange={handleUserDataChange}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    type="button"
                    onClick={handleShowBudget}
                  >
                    Enviar
                  </Button>
                </Form>
             {budgets.map((budget, index) => (
                  <Budget
                    key={index}
                    name={budget.name}
                    mail={budget.email}
                    tel={budget.phone}
                    service={budget.services}
                    languages={budget.languages}
                    pages={budget.pages}
                    price={budget.price}
                  />
                ))} 
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CheckBox;
