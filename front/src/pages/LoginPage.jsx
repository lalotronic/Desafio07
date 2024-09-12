import { useState } from "react";

const Loginpage = () => {

  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");  
  const [error, setError] = useState(false)
  //funcion para detectar arroba y puntos de mas
  function validarEmail(email) {
    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Verificar si el email cumple con el patrón
    if (!emailRegex.test(email)) {
      return false;
    }
  
    // Contar la cantidad de símbolos "@" en el email
    const atSymbolCount = (email.match(/@/g) || []).length;
  
    // Verificar si hay exactamente un símbolo "@"
    if (atSymbolCount !== 1) {
      return false;
    }
  
    // Verificar si hay más de un punto al final
    const finConMasPuntos = /(\.)+$/.test(email);
    if (finConMasPuntos) {
      return false;
    }
      // Verificar si hay más de un punto seguido
  const puntosSeguidos = /\.{2,}/;
  if (puntosSeguidos.test(email)) {
    return false;}
  
    // Si pasa todas las validaciones, el email es válido
    return true;
  }
//validarDatos es un funcion arrow que mira si los campos estan vacios
  const validarDatos = (e) => {
    e.preventDefault()
    
    if ( email.trim() === ''|| contrasenia.trim() === '') {
      setError(true);
      return;
      
    } 
    else if ( !(email.includes('@')) || !(email.includes('.'))) {
        setError(true);
        alert('Falta un arroba "@" o punto "." en tu mail');
        return;}

     else if(!validarEmail(email)){
      setError(true);
      alert('Ingrese el correo con solo un arroba y con solo un punto');
      return;
     }     
    
    
    else if (contrasenia.length < 6) {
      setError(true);
      alert('La contraseña debe ser mayor o igual a 6 caracteres');
      return;    
    }
    

    setError(false)
    setEmail('')
    setContrasenia('')
    alert('Bienvenido a Pizza Mamma Mia')    
    
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group">
          <h1>Login</h1>
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="ejemplo@dominio.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="text"
            name="contrasenia"
            className="form-control"
            placeholder="Deben ser al menos 6 letras o numeros"
            onChange={(e) => setContrasenia(e.target.value)}
            value={contrasenia}
          />
        </div>
        
        
        <button type="submit" className="btn btn-primary" style={{ marginBottom: '10px', marginTop: '10px'  }}>
          Login
        </button>
      </form>
      {/*<h1>Datos ingresados</h1>
      {email} - {contrasenia}*/}
    </>
  );
};

export default Loginpage;