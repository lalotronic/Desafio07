import { useState } from "react";

const Registro = () => {
  //const [nombre, setNombre] = useState("");
  //const [apellido, setApellido] = useState("");
  //const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [confirmarContrasenia, setConfirmarContrasenia] = useState("");
  const [error, setError] = useState(false)
//validarDatos es un funcion arrow que mira si los campos estan vacios
  const validarDatos = (e) => {
    e.preventDefault()
    
    if (contrasenia.trim() === '' || confirmarContrasenia.trim() === '' || email.trim() === '') {
      setError(true);
      return;
    } else if (contrasenia.length < 6) {
      setError(true);
      alert('La contraseña debe ser mayor o igual a 6 caracteres');
      return;    
    }
      else if (contrasenia!==confirmarContrasenia) {
      setError(true);
      alert('La contraseña y confirmacion son distintas');
      return; 
      }
      else{
        alert('Bienvenido, registro exitoso')
      }

    setError(false)
    setContrasenia('')
    setConfirmarContrasenia('')
    setEmail('')
    
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group">
          <h1>Registro</h1>
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
            name="contraseña"
            className="form-control"
            placeholder="Incluya numeros y letras, evite fechas clave"
            onChange={(e) => setContrasenia(e.target.value)}
            value={contrasenia}
          />
        </div>
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="text"
            name="condirmarContrasenia"
            className="form-control"
            placeholder="Repita su contraseña"
            onChange={(e) => setConfirmarContrasenia(e.target.value)}
            value={confirmarContrasenia}
          />
          {}
        </div>
        
        <button type="submit" className="btn btn-primary" style={{ marginBottom: '10px', marginTop: '10px'  }}>
          Enviar
        </button>
      </form>
      {/*<h1>Datos ingresados</h1>
      {email} - {contrasenia} - {confirmarContrasenia}*/}
    </>
  );
};

export default Registro;

