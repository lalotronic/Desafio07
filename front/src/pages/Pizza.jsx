//nuevo codigo donde solicitamos desde ProductContext el uso de la api
//usamos useParams para caputrar la id de pizza
//podemos llamar en el navegador con la ruta pizza/p001..por ejemplo
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // 1)se importa useParams
import { ProductContext } from "../context/ProductContext";
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams();
  const { pizzas } = useContext(ProductContext);
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const foundPizza = pizzas.find(p => p.id === (id));
    //console.log("Pizza encontrada:", foundPizza);
    setPizza(foundPizza);
  }, [id, pizzas]);

  if (!pizza) return <div>Cargando pizzas...</div>;
//Retornamos la misma tarjeta de CardPizza pero para una sola tarjeta
  return (        
    <>
  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
    <Card className="Card">
      <Card.Img className="imagenCard" variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: '600' }}>Pizza: {pizza.name}</Card.Title>
        <Card.Text style={{ color: '#555', lineHeight: '1.5' }}>
          <span style={{ fontSize: '12px' }}>{pizza.desc}</span>
          <strong style={{ display: 'block', fontSize: '16px', marginTop: '10px' }}>Ingredientes:</strong>
        </Card.Text>
        <ul style={{ paddingLeft: '20px', marginTop: '5px' }}>
          {pizza.ingredients.map((ingredient, i) => (
            <li key={i} style={{ fontSize: '12px', color: '#444' }}>{ingredient}</li>
          ))}
        </ul>
        <div className='precio'>
          <Card.Title className="CardTitle1" style={{ fontSize: '1.2rem', color: '#000' }}>Precio: ${pizza.price}</Card.Title>
          <div className="d-flex justify-content-center">
            {/* <Button variant="secondary">Ver más++ &#x1F440;</Button> */}
            <Button variant="primary" onClick={() => {
              addToCart(pizza);
            }}>Añadir &#x1F6D2;</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  </div>
</>
        //  <>
        //    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        //      <Card className="Card">
        //        <Card.Img className="imagenCard" variant="top" src={pizza.img} />
        //        <Card.Body>
        //          <Card.Title>Pizza: {pizza.name}</Card.Title>
        //          <Card.Text>
        //             <p style={{ fontSize: '12px' }}>{pizza.desc}</p>
                   
        //             <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Ingredientes:</p>
        //               <ul>
        //                  {pizza.ingredients.map((ingredient, i) => (
        //               <li key={i}>{ingredient}</li>
        //                ))}
        //             </ul>
        //           </Card.Text>
        //          <div className='precio'>
        //            <Card.Title className="CardTitle1">Precio: ${pizza.price}</Card.Title>
        //            <div className="d-flex justify-content-between">
        //              <Button variant="secondary">Ver más &#x1F440;</Button>
        //              <Button variant="primary">Añadir &#x1F6D2;</Button>
        //            </div>
        //          </div>
        //        </Card.Body>
        //      </Card>
        //    </div>
        //  </>
  
  );
};

export default Pizza;





// const Pizza = () => {
//   const { id } = useParams(); // 2)Obtener el id de la URL-Se agregó una línea para extraer el id de los parámetros de la URL utilizando useParams.
//   const [pizza, setPizza] = useState(null); // Iniciamos con null para que parta con algo

//   // Función que consume la API para una tarjeta 
//   const consultarApi = async () => {
//     try {
//       const url = `http://localhost:5000/api/pizzas/${id}`; // Usamos el id obtenido-modificamos la url de la api dinamicamente
//       const response = await fetch(url);
//       const data = await response.json();
//       setPizza(data); // Aquí se guardan los datos de la API en el estado
//     } catch (error) {
//       console.error("Error fetching pizza data:", error);
//     }
//   };

//   useEffect(() => {
//     consultarApi();
//   }, [id]); // Dependencia en id para volver a llamar si cambia-
//   //Se actualizó el useEffect para incluir el id como dependencia, 
//   //lo que permite que la función consultarApi se ejecute nuevamente si el id cambia.

//   // Renderizamos solo si los datos están cargados
//   if (!pizza) {
//     return <p>Cargando pizza...</p>;
//   }

//   // Retornamos la misma tarjeta de CardPizza pero para una sola tarjeta
//   return (
//     <>
//       <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
//         <Card className="Card">
//           <Card.Img className="imagenCard" variant="top" src={pizza.img} />
//           <Card.Body>
//             <Card.Title>Pizza: {pizza.name}</Card.Title>
//             <Card.Text>
//               <p style={{ fontSize: '12px' }}>{pizza.desc}</p><br />
//               <p style={{ fontWeight: 'bold' }}>Ingredientes:</p>
//               <ul>
//                 {pizza.ingredients.map((ingredient, i) => (
//                   <li key={i}>{ingredient}</li>
//                 ))}
//               </ul>
//             </Card.Text>
//             <div className='precio'>
//               <Card.Title className="CardTitle1">Precio: ${pizza.price}</Card.Title>
//               <div className="d-flex justify-content-between">
//                 <Button variant="secondary">Ver más &#x1F440;</Button>
//                 <Button variant="primary">Añadir &#x1F6D2;</Button>
//               </div>
//             </div>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default Pizza;