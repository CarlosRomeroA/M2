import { Button } from 'bootstrap';
import React from 'react';
import s from './Card.module.css';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  return (
    <div className={s.card}>
      <div>
        <div className={s.title}>
          <button className={s.btn} onClick={onClose}>x</button>
          <h3>{name}</h3>
        </div>
        <h5>Min</h5>
        <div>{min}</div>  
        <h5>Max</h5>
        <div>{max}</div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='icono imagen'/>
        <div>{onClose}</div>
      </div>
    </div>
  )
};