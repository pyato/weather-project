import "./CardPredictDetail.css";
import React from "react";

function CardPredictDetail({ weather, selectDay, selectIndex }) {

    return (
        <div>
            <div className="detail-head">
                {selectDay}
                <div className="detail-con">
                    <div className="detail-temp">
                        <img src={`http://openweathermap.org/img/wn/${weather.daily[selectIndex].weather[0].icon}@2x.png`} />
                        <div>
                            <p>{weather.daily[selectIndex].weather[0].main}</p>
                            <p>{Math.round(weather.daily[selectIndex].temp.day - 273.15)}°C</p>
                        </div>
                    </div>
                    <div className="detail-predict">
                        <p>Chance of rain {Math.round(weather.daily[selectIndex].pop * 100)} %</p>
                        <p>Humidity {weather.daily[selectIndex].humidity} %</p>
                        <p>UVI {weather.daily[selectIndex].uvi}</p>
                    </div>
                    <div className="detail-predict">
                        <p>Wind speed {weather.daily[selectIndex].wind_speed} m/s</p>
                        <p>Dew point {Math.round(weather.daily[selectIndex].dew_point - 273.15)}°C</p>
                        <p>Feels like {Math.round(weather.daily[selectIndex].feels_like.day - 273.15)}°C</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardPredictDetail;