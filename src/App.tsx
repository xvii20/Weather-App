

import React from 'react';
import './App.css';
import {useState,useEffect} from "react"
import WeatherUiToday from './components/weatherui';
import {Inputbar } from './components/inputbar';

// import { eventProp } from './components/inputbar';

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

function App() {
// let [value,setValue] = useState("")
let [lat,setLat] = useState("")  // get the latitude of the text in the input bar
let [lon,setLon] = useState("")  // get the longitude of the text in the input bar
let [loading,setLoading] = useState(false)
// Todays Weather info
let [city,setCity] = useState("")
let [country,setCountry] = useState("")
let [date,setDate] = useState("")
let [time, setTime] = useState("")
let [weatherDescription,setWeatherDescription] = useState("") // data.weather.description
let [temperature,setTemperature] = useState("")
let [main,setMain] = useState("")
let [humidity, setHumidity] = useState("")
let [windSpeed,setWindSpeed] = useState("")
let [icon, setIcon] = useState("")
let [fetchSuccess, setFetchSuccess] = useState(false)

// Tomorrows Weather Info
let [next_Weather,setNext_Weather] = useState("")  // set tomorrows main weather
let [tomorrowIcon,setTomorrowIcon] = useState("")
let [tomorrowTemp,setTomorrowTemp] = useState("")
let [tomorrowWeatherDesc,setTomorrowWeatherDesc] = useState("")

// 2 days Weather Info
let [twoDayWeather,setTwoDayWeather] = useState("") 
let [twoDayIcon,setTwoDayIcon] = useState("")
let [twoDayTemp,setTwoDayTemp] = useState("")
let [twoDayWeatherDesc,setTwoDayWeatherDesc] = useState("")

// 3 days Weather Info
let [threeDayWeather,setThreeDayWeather] = useState("")  
let [threeDayIcon,setThreeDayIcon] = useState("")
let [threeDayTemp,setThreeDayTemp] = useState("")
let [threeDayWeatherDesc,setThreeDayWeatherDesc] = useState("")

// 4 days Weather info
let [fourDayWeather,setFourDayWeather] = useState("")  
let [fourDayIcon,setFourDayIcon] = useState("")
let [fourDayTemp,setFourDayTemp] = useState("")
let [fourDayWeatherDesc,setFourDayWeatherDesc] = useState("")

//5 days Weather info
let [fiveDayWeather,setFiveDayWeather] = useState("")  
let [fiveDayIcon,setFiveDayIcon] = useState("")
let [fiveDayTemp,setFiveDayTemp] = useState("")
let [fiveDayWeatherDesc,setFiveDayWeatherDesc] = useState("")
let [fiveDayWeatherDesctwo,setFiveDayWeatherDesctwo] = useState("")

  return (
    <div className="App">

      <Inputbar setFiveDayWeatherDesctwo={setFiveDayWeatherDesctwo} setFiveDayWeather={setFiveDayWeather} setFiveDayIcon={setFiveDayIcon} setFiveDayTemp={setFiveDayTemp} setFiveDayWeatherDesc={setFiveDayWeatherDesc} setFourDayIcon={setFourDayIcon} setFourDayWeather={setFourDayWeather} setFourDayTemp={setFourDayTemp} setFourDayWeatherDesc={setFourDayWeatherDesc} setWindSpeed={setWindSpeed} setThreeDayWeatherDesc={setThreeDayWeatherDesc} setTwoDayWeatherDesc={setTwoDayWeatherDesc} setTomorrowWeatherDesc={setTomorrowWeatherDesc}setLat={setLat} setLon={setLon} setWeatherDescription={setWeatherDescription} setTime={setTime} setDate={setDate} setCountry={setCountry} setCity={setCity} setTemperature={setTemperature} setMain={setMain} setHumidity={setHumidity} setLoading={setLoading} setNext_Weather={setNext_Weather} setIcon={setIcon} setTomorrowIcon={setTomorrowIcon} setTomorrowTemp={setTomorrowTemp} setTwoDayIcon={setTwoDayIcon} setTwoDayTemp={setTwoDayTemp} setTwoDayWeather={setTwoDayWeather} setThreeDayIcon={setThreeDayIcon} setThreeDayTemp={setThreeDayTemp} setThreeDayWeather={setThreeDayWeather}  setFetchSuccess={setFetchSuccess}/> 

      <WeatherUiToday   fiveDayWeatherDesctwo={fiveDayWeatherDesctwo} setFiveDayWeatherDesc={setFiveDayWeatherDesc} fourDayWeather={fourDayWeather} fourDayIcon={fourDayIcon} fourDayTemp={fourDayTemp} fourDayWeatherDesc={fourDayWeatherDesc} fiveDayWeather={fiveDayWeather} fiveDayIcon={fiveDayIcon} fiveDayWeatherDesc={fiveDayWeatherDesc} fiveDayTemp={fiveDayTemp}  humidity={humidity} windSpeed={windSpeed} fetchSuccess={fetchSuccess} tomorrowWeatherDesc={tomorrowWeatherDesc} twoDayWeatherDesc={twoDayWeatherDesc} threeDayWeatherDesc={threeDayWeatherDesc} lat={lat} lon={lon} city={city} country={country} weatherDescription={weatherDescription} temperature={temperature} main={main} loading={loading} next_Weather={next_Weather} icon={icon} tomorrowIcon={tomorrowIcon} tomorrowTemp={tomorrowTemp} twoDayIcon={twoDayIcon} twoDayTemp={twoDayTemp} twoDayWeather={twoDayWeather} threeDayIcon={threeDayIcon} threeDayTemp={threeDayTemp} threeDayWeather={threeDayWeather}/>

    </div>
  );
}

export default App;