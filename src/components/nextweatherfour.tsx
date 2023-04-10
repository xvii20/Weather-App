import React from 'react'

type fourDayProps ={
    country:string
    fourDayWeatherDesc:string
fourDayWeather:string
fourDayIcon:string
fourDayTemp: string 

}

export default function Nextweatherfour(props:fourDayProps) {
    let fourDay = new Date()
    fourDay.setDate(fourDay.getDate() + 4);
 
    return (
    
        <div className="nextweather3 x" > 
        <div className="tomorrowdatediv">
          <p className="tomorrowdate"> {fourDay.toString().split(" ").slice(0,3).join(" ")} </p>
          <p className="tomorrowdate2"> {fourDay.toString().split(" ").slice(1,3).join(" ")} </p>
    
      </div>
      <div className="minitimediv">
    <h2 className="minitime"> {props.fourDayWeatherDesc}</h2>
    </div>
    
      <div className="tomorrowicondiv">
        { props.country?  <img src={`https://openweathermap.org/img/wn/${props.fourDayIcon}@2x.png`} className="tomorrowicon"  /> : ""}
        { props.country?  <h1 className="tomorrowtemp"> {props.fourDayTemp+"°C"}</h1> : ""}
      </div>
      <div className="alttempdiv">   { props.country?  <h1 className="alttomorrowtemp"> {props.fourDayTemp+"°C"}</h1> : ""}</div>
      <div className="nextweathermaindiv">
        
        <h2 className="nextweathermain"> {props.fourDayWeather}</h2>
      </div>
    
      </div>
      )
    }
    