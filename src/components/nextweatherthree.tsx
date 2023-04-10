import React from 'react'

type nextWeatherThreeProps = {
country:string
threeDayWeather:string
threeDayIcon:string
threeDayTemp: string | number
threeDayWeatherDesc:string
}

export default function Nextweatherthree(props:nextWeatherThreeProps) {
  let threeDay = new Date()
threeDay.setDate(threeDay.getDate() + 3);

  return (
    
    <div className="nextweather3"> 
    <div className="tomorrowdatediv">
      <p className="tomorrowdate"> {threeDay.toString().split(" ").slice(0,3).join(" ")} </p>
      <p className="tomorrowdate2"> {threeDay.toString().split(" ").slice(1,3).join(" ")} </p>

  </div>
  <div className="minitimediv">
<h2 className="minitime"> {props.threeDayWeatherDesc}</h2>
</div>

  <div className="tomorrowicondiv">
    { props.country?  <img src={`https://openweathermap.org/img/wn/${props.threeDayIcon}@2x.png`} className="tomorrowicon"  /> : ""}
    { props.country?  <h1 className="tomorrowtemp"> {props.threeDayTemp+"°C"}</h1> : ""}
  </div>
  <div className="alttempdiv">   { props.country?  <h1 className="alttomorrowtemp"> {props.threeDayTemp+"°C"}</h1> : ""}</div>
  <div className="nextweathermaindiv">
    
    <h2 className="nextweathermain"> {props.threeDayWeather}</h2>
  </div>

  </div>
  )
}
