import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import PizzaTarjeta from '../components/PizzaTarjeta';
import { UserContext } from '../context/UserContext';

export const Cart = () => {
  const { cart, getTotal } = useContext(CartContext);
  const { pizzas } = useContext(ProductContext); // consumimos el contexto de productos quien provee pizzas desde la api
  const { token, logout } = useContext(UserContext);

  // Función para obtener los detalles de las pizzas en el carrito
  //Aqui Cart: Muestra únicamente las pizzas que el usuario ha añadido al carrito,(a traves de pizzaId)
  //en cambio en el home muestra las id de todas las pizzas usando el mismo nombre pizzaId  
  //utilizando sus IDs para obtener detalles específicos.
  const getPizzaDetails = (pizzaId) => {
    return pizzas.find((pizza) => pizza.id === pizzaId);
      
  };

  return (
    <>
      <h1>Cart - Total: ${getTotal()}</h1>
      <button disabled={!token}>Pagar</button>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          cart.map((cartItem) => {
            const pizzaDetails = getPizzaDetails(cartItem.id); // cargamos los detalles en en pizzaDetails

            return (
              
              
              <PizzaTarjeta 
                key={cartItem.id} // damos la key al componente PiazzaTarjeta
                pizza={{ ...pizzaDetails, count: cartItem.quantity }} // Pasar detalles de pizza y cantidad
              />
              
            );
          })
        )}
      </div>
    </>
  );
}