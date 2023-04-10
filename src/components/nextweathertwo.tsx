import React from 'react'

type twoDayProps = {
twoDayTemp: number | string
twoDayIcon: string
twoDayWeather: string
country: string
twoDayWeatherDesc:string
}

let dayAfterTomorrow = new Date()
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

export default function Nextweathertwo(props:twoDayProps) {
  return (
    <div className="nextweather2"> 
    <div className="tomorrowdatediv">
      <p className="tomorrowdate"> {dayAfterTomorrow.toString().split(" ").slice(0,3).join(" ")} </p>
      <p className="tomorrowdate2"> {dayAfterTomorrow.toString().split(" ").slice(1,3).join(" ")} </p>
  </div>
  <div className="minitimediv">
<h2 className="minitime"> {props.twoDayWeatherDesc}</h2>
</div>
  <div className="tomorrowicondiv">
    { props.country?  <img src={`https://openweathermap.org/img/wn/${props.twoDayIcon}@2x.png`} className="tomorrowicon"  /> : ""}
    { props.country?  <h1 className="tomorrowtemp"> {props.twoDayTemp+"°C"}</h1> : ""}
  </div>
  <div className="alttempdiv">   { props.country?  <h1 className="alttomorrowtemp"> {props.twoDayTemp+"°C"}</h1> : ""}</div>
  <div className="nextweathermaindiv">
    <h2 className="nextweathermain"> {props.twoDayWeather}</h2>
  </div>

  </div>
  )
}
