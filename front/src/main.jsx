// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx"; 
// import "./index.css"; 
// import { BrowserRouter } from "react-router-dom";
// import CartProvider from './context/CartContext.jsx';
// import ProductProvider from './context/ProductContext.jsx';

// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <BrowserRouter>
//     <ProductProvider>
//       <CartProvider>
//         <App />
//       </CartProvider>
//     </ProductProvider>
//   </BrowserRouter>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; 
import "./index.css"; 
import { BrowserRouter } from "react-router-dom";
import CartProvider from './context/CartContext.jsx';
import ProductProvider from './context/ProductContext.jsx';
import  UserProvider  from './context/UserContext.jsx'; // Importar UserProvider


import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <UserProvider> {/* Envolver la aplicación con UserProvider */}
          <App />
        </UserProvider>
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>
);