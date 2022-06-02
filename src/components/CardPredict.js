import "./CardPredict.css";
import React, { useState } from "react";

function CardPredict({ index, weather, setSelectIndex, setSelectDay }) {

    let dayString = "";
    let dateString = "-";
    let icon = "";
    let max = "";
    let min = "";

    const unixTimestamp = weather.daily[index].dt;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);

    let day = dateObject.toLocaleString("en-US", { weekday: "long" });
    let date = dateObject.toLocaleString("en-US", { day: "numeric" });
    let month = dateObject.toLocaleString("en-US", { month: "long" });

    dayString = day;
    dateString = day + ", " + month + " " + date;
    
    icon = weather.daily[index].weather[0].icon;
    max = Math.round(weather.daily[index].temp.max - 273.15)
    min = Math.round(weather.daily[index].temp.min - 273.15)

    return (
        <div>
            <div className="card-con"
                onClick={() => {
                    setSelectIndex(index);
                    setSelectDay(dateString);
                }}
            >
                <div className="card-day">
                    {dayString}
                </div>
                <div className="card-icon">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                </div>
                <div className="card-maxmin">
                    <div>{max}°C</div>
                    <div>|</div>
                    <div>{min}°C</div>
                </div>
            </div>
        </div>
    )
}

export default CardPredict;