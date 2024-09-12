//Trabajo Enrique Paillavil G68
import { useContext } from 'react';
import CardPizza from '../components/CardPizza';
import Header from '../components/Header';
import { Cart } from '../pages/Cart';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext'; // Importar UserContext

function Home() {
  const { pizzas, loading, error } = useContext(ProductContext);
  const { token, logout } = useContext(UserContext); // Obtener el token y la función logout


  return (
    <>
      <Header />
      <h1>Desafío 07-token:{token ? 'true' : 'false'}</h1>
      <div>
        {loading && <p>Loading...</p>}
        {error && !loading && <p>{error}</p>}
        {!loading && !error && pizzas.length === 0 && <p>No hay pizzas</p>}
        {!loading &&
          !error &&
          pizzas.length > 0 && (
            <div className="cards">
              {/* Dentro del map(), se renderiza un componente CardPizza para cada pizza.
                  Se pasa pizza.id como prop a CardPizza usando pizzaId={pizza.id}. 
                  Esto permite que el componente CardPizza 
                  conozca el ID de cada pizza específica.
                  el home esta consumiendo la api desde productContext
                  y le pasa pizzaId a CardPizza quien trabaja con props */}
              {pizzas.map((pizza, index) => (
                <CardPizza pizzaId={pizza.id} key={pizza.id} />
              ))}
            </div>
          )}
      </div>
    </>
  );
}

export default Home;
