// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; // Importar UserContext

export default function Navbar() {
  const { getQuantity, getTotal } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // Obtener el token y la función logout

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <Link className="btn btn-primary botonHome-btn" to={"/"}>
                  &#x1F355;Home
                </Link>
              </li>

              {/* Mostrar botones según el valor de la variable 'token' */}
              {!token ? (
                <>
                  <li className="nav-item me-2">
                    <Link className="btn btn-primary botonLogin-btn" to={"/login"}>
                      &#x1F510;Login
                    </Link>
                  </li>

                  <li className="nav-item me-2">
                    <Link className="btn btn-primary botonRegister-btn" to={"/register"}>
                      &#x1F510;Register
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item me-2">
                    <Link className="btn btn-primary botonProfile-btn" to={"/profile"}>
                      &#x1F510;Profile
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    <a
                      className="btn btn-primary botonLogout-btn"
                      href="#"
                      onClick={logout} // Llamar a la función logout al hacer clic
                    >
                      &#x1F512;Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="botonTotal-btn" to={"/cart"}>
                  &#x1F6D2;Cart: Total: ${getTotal()}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}