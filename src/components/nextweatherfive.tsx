
type fiveDayProps ={
country:string
fiveDayWeatherDesc:any
fiveDayWeather:string
fiveDayIcon:string
fiveDayTemp: string 
setFiveDayWeatherDesc:Function
fiveDayWeatherDesctwo:string
}


export default function Nextweatherfive(props:fiveDayProps) {


    return (
    
        <div className="nextweather3 xi"> 
        <div className="tomorrowdatediv">
          <p className="tomorrowdate">  {props.fiveDayWeatherDesctwo} </p>
          <p className="tomorrowdate2"> {props.fiveDayWeatherDesctwo.split(" ").slice(1).join(" ")} </p>
    
      </div>
      <div className="minitimediv">
         <h2 className="minitime"> {props.fiveDayWeatherDesc}</h2>
     </div>
    
      <div className="tomorrowicondiv">
        { props.country?  <img src={`https://openweathermap.org/img/wn/${props.fiveDayIcon}@2x.png`} className="tomorrowicon"  /> : ""}
        { props.country?  <h1 className="tomorrowtemp"> {props.fiveDayTemp+"°C"}</h1> : ""}
      </div>
      <div className="alttempdiv">   { props.country?  <h1 className="alttomorrowtemp"> {props.fiveDayTemp+"°C"}</h1> : ""}</div>
      <div className="nextweathermaindiv">
        <h2 className="nextweathermain"> {props.fiveDayWeather}</h2>
      </div>
    
      </div>
      )
    }
    