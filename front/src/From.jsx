import React, { useRef } from 'react';

export const From = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // const input = document.querySelector('input');
    // input.focus();
    console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>FORMULARIO</h1>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>FOCUS</button>
    </div>
  );
};
