import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx'; 

export default function App() {

  const [cities, setCities] = useState([]);
  
  function onSearch(ciudad) {

    const apiKey= '4ae2636d8dfbdc3044bede63951a019b'

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then((r)=>r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          const ciudadEncontrada = cities.find(c => c.name === ciudad.name)
          if (ciudadEncontrada) return alert('la ciudad ya se encuentra en pantalla');
          else setCities(allCities => [...allCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities(allCities => allCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities} onClose={onClose}/>
    </div>
  );
}



