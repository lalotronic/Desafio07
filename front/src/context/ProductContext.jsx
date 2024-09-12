import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pizzas');
        console.log('Datos obtenidos de la API:', response.data); // Agregado para depuración
        setPizzas(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ pizzas }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;