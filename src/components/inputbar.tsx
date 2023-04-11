import axios from 'axios'
import React from 'react'
import { useEffect, useRef,useState, Dispatch, SetStateAction } from 'react'

export type eventProp = {
  lat?: Dispatch<SetStateAction<string>>,
  setLat: Dispatch<SetStateAction<string>>,
  lon?: Dispatch<SetStateAction<string>>,
  setLon: Dispatch<SetStateAction<string>>
  setWeatherDescription: Dispatch<SetStateAction<string>>
  setTime:Dispatch<SetStateAction<string>>
  setDate:Dispatch<SetStateAction<string>>
  setCountry:  Dispatch<SetStateAction<string>>
  setCity: Dispatch<SetStateAction<string>>
  setMain: Dispatch<SetStateAction<string>>
  setTemperature: Dispatch<SetStateAction<string>>
  setHumidity: Dispatch<SetStateAction<string>>
  setLoading: Dispatch<SetStateAction<boolean>>
  setNext_Weather: Dispatch<SetStateAction<string>>
  setIcon: Dispatch<SetStateAction<string>>
  setTomorrowIcon:Dispatch<SetStateAction<string>>
  setTomorrowTemp: Dispatch<SetStateAction<string>>
  setTwoDayTemp: Dispatch<SetStateAction<string>>
  setTwoDayIcon: Dispatch<SetStateAction<string>>
  setTwoDayWeather: Dispatch<SetStateAction<string>>
  setThreeDayTemp: Dispatch<SetStateAction<string>>
  setThreeDayIcon: Dispatch<SetStateAction<string>>
  setThreeDayWeather: Dispatch<SetStateAction<string>>

  setTomorrowWeatherDesc:Dispatch<SetStateAction<string>>
  setTwoDayWeatherDesc:Dispatch<SetStateAction<string>>
  setThreeDayWeatherDesc:Dispatch<SetStateAction<string>>
  setFetchSuccess:Dispatch<SetStateAction<boolean>>
  setWindSpeed: Dispatch<SetStateAction<string>>

setFourDayWeather:Dispatch<SetStateAction<string>>
setFourDayIcon:Dispatch<SetStateAction<string>>
setFourDayTemp:Dispatch<SetStateAction<string>>
setFourDayWeatherDesc:Dispatch<SetStateAction<string>>
setFiveDayWeather:Dispatch<SetStateAction<string>>
setFiveDayIcon:Dispatch<SetStateAction<string>>
setFiveDayTemp:Dispatch<SetStateAction<string>>
setFiveDayWeatherDesc:Dispatch<SetStateAction<string>>

setFiveDayWeatherDesctwo:Dispatch<SetStateAction<string>>

setRemoveDate:Dispatch<SetStateAction<boolean>>
};    

export function Inputbar(props:eventProp ) {
  let [inputValue,setInputValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>{

        inputRef.current?.focus()   // Typescript error occurs here, to fix just put a question mark after current
        },[])

    function handleInput (e: React.ChangeEvent<HTMLInputElement>){
      setInputValue(e.target.value.toLowerCase())
    }

        
     async function fetchData(){try{
      // https://openweathermap.org/api/geocoding-api#direct    -- get coordinates
      // https://openweathermap.org/forecast5

      // let temp = inputValue 


      props.setLoading(true)
/*
     let response2 =  await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${temp}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
     // props.setCity(response2.data[0].name) // gets the correct city name...
     console.log(response2.data[0])
console.log(response2)
      props.setLat(response2.data[0].lat)
      props.setLon(response2.data[0].lon)
      let templat = response2.data[0].lat.toString()
     let templon = response2.data[0].lon.toString()   */

  // this fetches more accurate data for todays weather
        let todaybetterdata = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=${process.env.REACT_APP_API_KEY}`)
      //  console.log(todaybetterdata)
      //  console.log(todaybetterdata.data.weather[0].main)  // returns the main weather (ex: Rain)
        props.setMain(todaybetterdata.data.weather[0].main)
         let templat = todaybetterdata.data.coord.lat.toString()
         let templon = todaybetterdata.data.coord.lon.toString()
         props.setLat(todaybetterdata.data.coord.lat.toString())
        props.setLon(todaybetterdata.data.coord.lon.toString())
        props.setHumidity(todaybetterdata.data.main.humidity)

        props.setWindSpeed(todaybetterdata.data.wind.speed)

        props.setCity(todaybetterdata.data.name)

        // this fetches data fpr weather up to 5 days in advance
        let weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${templat}&lon=${templon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)



          // console.log(weatherData) 
         // console.log(weatherData.data.city.country)  // returns the correct country
          // console.log(weatherData.data.city.name)  // returns the correct city...
          // console.log(weatherData.data.list[0].weather[0].description)  // returns the correct weather description (ex: light rain)

       
       // set todays weather data
       props.setCountry(weatherData.data.city.country)

       props.setWeatherDescription(weatherData.data.list[0].weather[0].description)
       props.setTemperature(weatherData.data.list[0].main.temp)
       // props.setHumidity(weatherData.data.list[0].main.humidity)
       props.setIcon(weatherData.data.list[0].weather[0].icon)
      // console.log(weatherData.data.list[0].weather[0].icon)  // get the icon
      // set tomorrows weather data 
      props.setTomorrowIcon(weatherData.data.list[8].weather[0].icon)
 props.setNext_Weather(weatherData.data.list[8].weather[0].main)
props.setTomorrowTemp(weatherData.data.list[8].main.temp)

props.setTomorrowWeatherDesc(weatherData.data.list[8].dt_txt.split(" ").slice(1).join(" "))
      // set two day weather data
      props.setTwoDayIcon(weatherData.data.list[16].weather[0].icon)
      props.setTwoDayTemp(weatherData.data.list[16].main.temp)
      props.setTwoDayWeather(weatherData.data.list[16].weather[0].main)

     props.setTwoDayWeatherDesc(weatherData.data.list[16].dt_txt.split(" ").slice(1).join(" "))
      console.log(weatherData.data.list[16].dt_txt.split(" ").slice(1).join(" ")) // gets the time
      // set three day weather data
      props.setThreeDayIcon(weatherData.data.list[24].weather[0].icon)
      props.setThreeDayTemp(weatherData.data.list[24].main.temp)
      props.setThreeDayWeather(weatherData.data.list[24].weather[0].main)

      props.setThreeDayWeatherDesc(weatherData.data.list[24].dt_txt.split(" ").slice(1).join(" "))  // time


      // set four day weather data
      props.setFourDayIcon(weatherData.data.list[32].weather[0].icon)

      props.setFourDayTemp(weatherData.data.list[32].main.temp)

      props.setFourDayWeather(weatherData.data.list[32].weather[0].main)

      props.setFourDayWeatherDesc(weatherData.data.list[32].dt_txt.split(" ").slice(1).join(" "))  // time

      // set 5 day weather data
      props.setFiveDayIcon(weatherData.data.list[39].weather[0].icon)
      props.setFiveDayTemp(weatherData.data.list[39].main.temp)
      props.setFiveDayWeather(weatherData.data.list[39].weather[0].main)
let getdate = new Date(weatherData.data.list[39].dt_txt.split(" ").slice(0,1).join(" "))
getdate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      props.setFiveDayWeatherDesctwo(getdate.toLocaleDateString('default', { weekday: 'short',  month: 'short', day: 'numeric',   }))  // get date

props.setFiveDayWeatherDesc(weatherData.data.list[39].dt_txt.split(" ").slice(1).join(" "))  // time

      props.setFetchSuccess(true)
        props.setRemoveDate(true)
    if (inputValue == "berlin"){props.setCity("Berlin")}
      props.setLoading(false)
      }
       catch(err){
        props.setLoading(false)
        alert(`Sorry we cannot get weather data for location: ${inputValue}`)
       }
      }
        

  return (
    <div className="inputbarcontainer cssanimation blurIn">
        <div className="innerinputbarcontainer">
            <input className="input"
            type="text"
            placeholder="Enter a City"
            ref={inputRef}
            onChange={handleInput}
            />
           {inputValue? <button onClick={fetchData}> Search </button> : ""}
       </div>

    </div>
  )
}
