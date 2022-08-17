import React from 'react';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (  
    <div className={s.container}>
      {
        cities.map(ciudad =>
          <Card
            max={ciudad.main.temp_max}
            min={ciudad.main.temp_min}
            name={ciudad.name}
            img={ciudad.weather[0].icon}
            onClose={() => alert('Bazinga2!')}
          />
        )
      }
    </div>  
  )
};
console.log(Card);