import React from 'react';

export default function SearchBar(onSearch) {
  // acá va tu código
  return (
    <div>
      <input placeholder='Ciudad...'/>
      <button onClick={onSearch}>Agregar</button>
    </div>  
  )
};