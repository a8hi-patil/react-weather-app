import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Input from "./Components/Input/Input";

function App() {
  const [degrees, setDegrees] = useState(null);
  const [location, setLocation] = useState("");
  const [userLocation, setUserlocation] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [country, setCountry] = useState("");
  const [fetch, setFetch] = useState(false);

  const API_KEY = "f8c0e661051b4cb361cbac75ffc0895a";

  const fetchData = async (e) => {
    e.preventDefault();
    console.log("clickec");
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}&units=metric`
    );
    const data = await res.data;

    setDegrees(data.main.temp);
    setLocation(data.name);
    setDescription(data.weather[0].description);
    setIcon(data.weather[0].icon);
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setCountry(data.sys.country);
    setFetch(true);
  };

  useEffect(() => {
    // fetchData();
  }, []);

  return fetch ? (
    <div className="App">
      <div className="weather">
        <Input
          text={(e) => {
            setUserlocation(e.target.value);
          }}
          submit={fetchData}
        />
        <div className="weather-display">
          <h3 className="weather_location">Weather in {location} </h3>
          <div>
            <h1 className="weather_degrees">{degrees} °C</h1>
          </div>
          <div className="weather_discription">
            <div>
              <div className="weather_discription_head">
                <span className="weather-icon">
                  <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="weather icon"
                  />
                </span>
                <h3>{description}</h3>
              </div>
              <h3>Humidity : {humidity}%</h3>
              <h3>Wind Speed : {wind} m/s</h3>
            </div>
            <div className="weather-country">
              <h3>{country}</h3>
              <h2 className="weather_date">04/30/2022, 2:05:24PM</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="App">
      <div className="welcome-note">
        <Input
          text={(e) => {
            setUserlocation(e.target.value);
          }}
          submit={fetchData}
        />
        <div className="weather-note">
          <h3>Welcome To Weather App {location} </h3>
          <p>Please search any city name to continue..</p>
        </div>
        <div className="extra">
          <p>Powred By OpenWeather</p>
          <br />
          <p>Abhijit J. Patil</p>
        </div>
      </div>
    </div>
  );
}

export default App;
