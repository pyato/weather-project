import "./WeatherToday.css";
import React from "react";

function WeatherToday({ weather }) {

    return (
        <div className="weather-today-con">
            <div className="icon-con">
                <img src={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`} />
                <p>{weather.daily[0].weather[0].main}</p>
            </div>
            <div className="temp-today">
                <p>{Math.round(weather.daily[0].temp.day - 273.15)}°C</p>
            </div>
            <div className="feels-today">
                <p>Feels like {Math.round(weather.daily[0].feels_like.day - 273.15)}°C</p>
            </div>
            <div className="more-today">
                <div>
                    <p>Chance of rain {Math.round(weather.daily[0].pop * 100)} %</p>
                    <p>Humidity {weather.daily[0].humidity} %</p>
                </div>
                <div>
                    <p>Wind speed {weather.daily[0].wind_speed} m/s</p>
                    <p>Dew point {Math.round(weather.daily[0].dew_point - 273.15)}°C</p>
                </div>
                <div>
                    <p>UVI {weather.daily[0].uvi}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherToday;