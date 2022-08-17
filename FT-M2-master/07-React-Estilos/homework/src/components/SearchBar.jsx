import React from 'react';
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return (
    <div className={s.container}>
      <input placeholder='Ciudad...'/>
      <button onClick={onSearch}>Agregar</button>
    </div>
  )
};