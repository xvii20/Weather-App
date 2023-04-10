import React from 'react'

type nextweatherprops = {
country:string
tomorrowTemp: string | number
tomorrowIcon: string
next_Weather:string
tomorrowWeatherDesc:string
}

export default function Nextweather(props:nextweatherprops) {
    let tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <div className="nextweather"> 
    <div className="tomorrowdatediv">
      <p className="tomorrowdate"> {tomorrow.toString().split(" ").slice(0,3).join(" ")} </p>
      <p className="tomorrowdate2"> {tomorrow.toString().split(" ").slice(1,3).join(" ")} </p>
  </div>
  <div className="minitimediv">
<h2 className="minitime"> {props.tomorrowWeatherDesc}</h2>
</div>
  <div className="tomorrowicondiv">
    { props.country?  <img src={`https://openweathermap.org/img/wn/${props.tomorrowIcon}@2x.png`} className="tomorrowicon"  /> : ""}
    { props.country?  <h1 className="tomorrowtemp"> {props.tomorrowTemp+"°C"}</h1> : ""}
  </div>
  <div className="alttempdiv">   { props.country?  <h1 className="alttomorrowtemp"> {props.tomorrowTemp+"°C"}</h1> : ""}</div>
  <div className="nextweathermaindiv">
    <h2 className="nextweathermain"> {props.next_Weather}</h2>
  </div>

  </div>
  )
}
