import { Button } from 'bootstrap';
import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.card}>
      <div className={s.title}>
        <button className={s.btn} onClick={onClose}>x</button>
        <h3>{name}</h3>
      </div>
      <div className={s.temp}>
        <div>
          <h4>Min</h4>
          <h4>{min}</h4>  
        </div> 
        <div>
          <h4>Max</h4>
          <h4>{max}</h4>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono imagen'/>
      </div>
    </div>
  )
};