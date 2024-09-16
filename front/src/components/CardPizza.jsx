import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';

function CardPizza({ pizzaId }) {
  const { addToCart } = useContext(CartContext);
  const { pizzas } = useContext(ProductContext);
  const navigate = useNavigate(pizzaId);
  const handleClick=(pizzaId) => {
    navigate("/pizza/"+pizzaId)
  };

  // Buscamos la pizza específica por ID
  const pizza = pizzas.find(p => p.id === pizzaId);

  if (!pizza) {
    return <div>Cargando...</div>; // Manejar el caso en que la pizza no está disponible
  }

  return (
    <Card className="Card">
      <Card.Img className="imagenCard" variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>Pizza: {pizza.name}</Card.Title>
        <Card.Text>
          <strong>Ingredientes:</strong>
        </Card.Text>
        <ul>
          {pizza.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <div className='precio'>
          <Card.Title className="CardTitle1">Precio: ${pizza.price}</Card.Title>
          <div className="d-flex justify-content-between"> 
            <Button variant="secondary"onClick={() => {
              handleClick(pizzaId);
            }}>Ver más &#x1F440;</Button>
            <Button variant="primary" onClick={() => {
              addToCart(pizza);
            }}>Añadir &#x1F6D2;</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;