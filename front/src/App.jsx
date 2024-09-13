import React, { useContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate} from "react-router-dom";

import Navbar  from "./components/Navbar";
import Home  from "./pages/Home";
import Registro  from "./pages/Registro";
import LoginPage  from "./pages/LoginPage";
import Profile  from "./pages/Profile";
import { Cart }  from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound  from "./components/NotFound";
import Footer  from "./components/Footer";
import CartProvider from "./context/CartContext";
import { UserContext } from './context/UserContext';//para redirigir el logout




function App() {
  const { token, logout } = useContext(UserContext);

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* 5.Implementa la ruta protegida para "/profile". Si el token es false, redirige a "/login".
              Además, si el token es true, los usuarios no deberían poder acceder a la página de
              login y register (los puedes redirigir al home que es "/""). */}
          <Route path="/register" element={token ? <Navigate to="/" /> : <Registro />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
          
          {/* Si el token es false, redirige a "/login" */}
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />          
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;


