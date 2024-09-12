//nuevo codigo
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 1)se importa useParams

const Pizza = () => {
  const { id } = useParams(); // 2)Obtener el id de la URL-Se agregó una línea para extraer el id de los parámetros de la URL utilizando useParams.
  const [pizza, setPizza] = useState(null); // Iniciamos con null para que parta con algo

  // Función que consume la API para una tarjeta 
  const consultarApi = async () => {
    try {
      const url = `http://localhost:5000/api/pizzas/${id}`; // Usamos el id obtenido-modificamos la url de la api dinamicamente
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data); // Aquí se guardan los datos de la API en el estado
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, [id]); // Dependencia en id para volver a llamar si cambia-
  //Se actualizó el useEffect para incluir el id como dependencia, 
  //lo que permite que la función consultarApi se ejecute nuevamente si el id cambia.

  // Renderizamos solo si los datos están cargados
  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  // Retornamos la misma tarjeta de CardPizza pero para una sola tarjeta
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <Card className="Card">
          <Card.Img className="imagenCard" variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>Pizza: {pizza.name}</Card.Title>
            <Card.Text>
              <p style={{ fontSize: '12px' }}>{pizza.desc}</p><br />
              <p style={{ fontWeight: 'bold' }}>Ingredientes:</p>
              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </Card.Text>
            <div className='precio'>
              <Card.Title className="CardTitle1">Precio: ${pizza.price}</Card.Title>
              <div className="d-flex justify-content-between">
                <Button variant="secondary">Ver más &#x1F440;</Button>
                <Button variant="primary">Añadir &#x1F6D2;</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Pizza;