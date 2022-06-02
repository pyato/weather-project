import "./SearchCity.css";
import React from "react";

function SearchCity({ city, location, setLocation, handleSubmit, weather }) {

    let dateString = ""

    if (weather !== undefined) {
        const unixTimestamp = weather.daily[0].dt;
        const milliseconds = unixTimestamp * 1000;
        const dateObject = new Date(milliseconds);

        let date = dateObject.toLocaleString("en-US", { day: "numeric" });
        let day = dateObject.toLocaleString("en-US", { weekday: "long" });
        let month = dateObject.toLocaleString("en-US", { month: "long" });

        dateString = day + ", " + month + " " + date;
    }

    return (
        <div className="search-con">
            <div>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                            setLocation("");
                        }
                    }}
                    placeholder="Search..."
                />
            </div>
            <div className="search-content">
                <p>{city}</p>
                <p>{dateString}</p>
            </div>
        </div>
    )
}

export default SearchCity;