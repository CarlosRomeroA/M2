import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Ciudad(props) {
    const { ciudadId } = useParams()
    const [infoCity, setInfoCity] = useState()
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${ciudadId}&appid=4ae2636d8dfbdc3044bede63951a019b`)
        .then((respuesta)=>respuesta.json())
        .then((info)=>{
            const objetoCiudad = {
                name: info.name,
                temp: info.main.temp, 
                weather: info.weather[0].main,
                wind: info.wind.speed,
                clouds: info.clouds.all,
                latitud: info.coord.lat, 
                longitud: info.coord.lon
            }
            setInfoCity(objetoCiudad)
        })

    if(!infoCity){
        return (
            <h1> Cargando... </h1>
        )
    } else {
        return (
            <div className="ciudad">
                <div className="container">
                    <h2>{infoCity.name}</h2>
                    <div className="info">
                        <div>Temperatura: {infoCity.temp} °C</div>
                        <div>Clima: {infoCity.weather}</div>
                        <div>Cantidad de nubes: {infoCity.wind} km/h</div>
                        <div>Latitud: {infoCity.latitud}°</div>
                        <div>Longitud: {infoCity.longitud}°</div>
                    </div>
                </div>
            </div>
        )
    }   
}