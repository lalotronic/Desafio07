import { createContext, useState } from 'react';

//1) Crear el contexto
export const CartContext = createContext();

//2) Crear el provider
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const index = cart.findIndex((item) => item.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
      //console.log('Carrito actualizado (incrementando):', newCart);
    } else {
      const newCart = [...cart, { ...pizza, quantity: 1 }];
      setCart(newCart);
      //console.log('Carrito actualizado (nuevo):', newCart); // Muestra el carrito actualizado
    }
  };

  const removeFromCart = (pizzaId) => {
    const index = cart.findIndex((item) => item.id === pizzaId);
    if (index === -1) return;
    let newCart = [...cart];

    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart = newCart.filter((item) => item.id !== pizzaId);
    }
    setCart(newCart);
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getTotal, getQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
