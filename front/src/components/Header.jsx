import React from 'react'


export default function () {
  return (
    <div
      style={{
        backgroundImage: `url(src/assets/image/piza1.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)', // color negro con 50% de transparencia
          padding: '20px',
          borderRadius: '10px',
          color: 'white',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1>¡Pizzería Mamma Mía!</h1>
        <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
      </div>
    </div>
  );
}
