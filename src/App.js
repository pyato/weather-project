import './App.css';
import { useState } from 'react';
import axios from 'axios';
import WeatherToday from './components/WeatherToday';
import SearchCity from './components/SearchCity';
import CardPredict from './components/CardPredict';
import CardPredictDetail from './components/CardPredictDetail';

function App() {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("Enter yor city");
  const [selectIndex, setSelectIndex] = useState(1);
  const [selectDay, setSelectDay] = useState("");

  async function handleSubmit() {
    let response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.REACT_APP_API_KEY}`)
    setCity(response.data[0].name);
    let lat = await response.data[0].lat
    let lon = await response.data[0].lon
    response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`)
    setWeather(response.data)
    console.log("HI ball sdfsd dddd");
  }

  return (
    <div>
      {weather === undefined ?
        <div className="container-bg">
          <div className="container">
            <div className="today-con">
              <div className="weather-today">

              </div>
              <div className="search-city">
                <SearchCity
                  city={city}
                  location={location}
                  setLocation={setLocation}
                  handleSubmit={handleSubmit}
                  weather={weather}
                />
              </div>
            </div>
          </div>
        </div>
        :
        <div>
          <div className="container-bg">
            <div className="container">
              <div className="today-con">
                <div className="weather-today">
                  <WeatherToday weather={weather} />
                </div>
                <div className="search-city">
                  <SearchCity
                    city={city}
                    location={location}
                    setLocation={setLocation}
                    handleSubmit={handleSubmit}
                    weather={weather}
                  />
                </div>
              </div>
              <div className="card-predict">
                <div><CardPredict index={1} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
                <div><CardPredict index={2} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
                <div><CardPredict index={3} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
                <div><CardPredict index={4} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
                <div><CardPredict index={5} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
                <div><CardPredict index={6} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
                <div><CardPredict index={7} weather={weather} setSelectIndex={setSelectIndex} setSelectDay={setSelectDay} /></div>
              </div>
            </div>
          </div>
          <div className="container">
            <CardPredictDetail selectIndex={selectIndex} selectDay={selectDay} weather={weather} />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
