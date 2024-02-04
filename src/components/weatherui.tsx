
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Nextweather from './nextweather'
import Nextweatherthree from './nextweatherthree'
import Nextweathertwo from './nextweathertwo'
import Nextweatherfour from './nextweatherfour'
import Nextweatherfive from './nextweatherfive'
import ArrowComponent from './arrowload'
import {useState, useEffect,SetStateAction, Dispatch} from "react"

type weatherDataProps = {
lat: string
lon: string
city: string
country: string
weatherDescription: string
temperature: string
main: string
loading:boolean
next_Weather:string
icon:string
tomorrowIcon:string
tomorrowTemp: string
twoDayWeather: string
twoDayTemp: string
twoDayIcon: string

threeDayWeather: string
threeDayTemp: string
threeDayIcon: string

threeDayWeatherDesc:string 
twoDayWeatherDesc:string
tomorrowWeatherDesc:string 
fetchSuccess:boolean
windSpeed: string | number
humidity:string

fourDayWeather:string
fourDayIcon:string
fourDayTemp:string
fourDayWeatherDesc:string
fiveDayWeather:string
fiveDayIcon:string
fiveDayTemp:string
fiveDayWeatherDesc:string

setFiveDayWeatherDesc: Dispatch<SetStateAction<string>>
fiveDayWeatherDesctwo:string
}


export default function WeatherUiToday(props:weatherDataProps) {
  let [word,setword] = useState("hello")
  let [moreinfo,setmoreinfo] = useState(true)
  let [loadmore,setloadmore] = useState(false)
let [getfetch, setgetfetch] = useState(false)
let [getmouse, setgetmouse] = useState(false)
let [getwidth,setgetwidth] = useState(window.innerWidth)
let [getheight,setgetheight] = useState(window.innerHeight)


function detectWidthandHeight(){setgetwidth(window.innerWidth)
setgetheight(window.innerHeight)
if(window.innerWidth > 522 && loadmore==true){setloadmore(false)
}

else if (window.innerWidth > 522 && loadmore==true){setloadmore(false)
setgetfetch(true)}

else if (window.innerWidth > 641 && loadmore==true){setloadmore(false)
setgetfetch(false)}
}

useEffect(() =>{
  window.addEventListener("resize",detectWidthandHeight)

  return function (){
    window.removeEventListener("resize",detectWidthandHeight)
    
      }
},[getheight,getwidth])

let getTime = new Date()
  // console.log(getTime)
  // console.log(getTime.toString().split(" ").slice(0,4).join(" ")) // get todays date Sat Apr 08 2023
 // console.log(getTime.getHours() + ":" + getTime.getMinutes())  // get the time
let tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1);

  return (

    <div className="mainweathercontainer">


{props.loading? <> <div className="loadingdiv"> <img src={require("../images/Ripple.gif")} className="loadingimage"/>  
</div>
<div className="loadingdiv2"> <h1 className="loading cssanimation leFadeIn random"> Loading...</h1> </div>
</>
 : 
<>
<div className="weathertodaycontainerparent cssanimation fadeIn ">
  <div className={ props.city? " weathertodaycontainer"  : "brokenweathertodaycontainer"   }> 
    <div className="countrynamediv">
      {props.city? <h1 className="country"> {props.city.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}, {props.country}</h1> : ""}
    </div>
    <div className="latlondiv">
      {props.country? <p className="latlon"> Lat: {props.lat} Lon: {props.lon} </p> : "" }
    </div>

 {props.country? <div className="datediv"><p className="date"> {getTime.toString().split(" ").slice(0,4).join(" ")+"," + " " + getTime.getHours() + ":" + getTime.getMinutes()} </p></div> : "" } 
 {props.country? <div className="datediv2"><p className="date"> {getTime.toString().split(" ").slice(0,4).join(" ")}</p></div> : ""}

<div className="temperaturediv">

{/* show weather image icon */ }
  { props.country? <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} className="icon"/> : ""}

  {props.city? <h1 className="temperature"> {props.temperature+"°C"} </h1> : ""}
</div>
  <div className="maindiv">
    <h1 className="main"> {props.main} </h1>
  </div>

  {getwidth < 577? 
  <Tippy content={<>{getwidth < 510? <div>Lat: {props.lat}  Lon: {props.lon}</div> : ""}<div className="tippyhumidcontainer"> Humidity: {props.humidity}%</div><div> Windspeed {props.windSpeed}km/h</div></>}> 
  <div className="moreinfo cssanimation fadeInLeft "> 

<p className="moreinfo2"> More Info </p> 
  </div> 
  </Tippy>
   : ""}

  <div className="humidityandwind" > 
   {props.city? <span className="humidity">Humidity </span> : ""}
  {props.city? <span className="wind">Windspeed</span>: ""}  
    
    {/* container used for giving more info on humidity and wind speed when css width reaches a very low width*/ }

  </div> 
 

 <div className="humidityandwind"> 
  {props.city? <span className="humiditydata">{props.humidity}%</span> : ""}
  {props.city? <span className="winddata">{props.windSpeed}km/h</span>
   : ""}
</div>   

  </div>
   </div>

{props.city? 
   <div className="between"> 
<Tippy content={<div className="tippycontainer"> Click to toggle between More Data </div>}>
 <div className={getmouse? "arrowdiv cssanimation fadeIn infinite" : "arrowdiv"}  onMouseLeave={function(){setgetmouse(false)}} onMouseEnter={function(){ setgetmouse(true)}}>  <ArrowComponent setloadmore={setloadmore} loadmore={loadmore} getmouse={getmouse} setgetmouse={setgetmouse}/>   </div> 
</Tippy>
</div>
: ""}

<div className={props.city? "customeffectminiweathercontainer cssanimation blurInRight ": "miniweathercontainer cssanimation blurOut"} >
{loadmore? "": <Nextweather tomorrowWeatherDesc={props.tomorrowWeatherDesc} country={props.country} tomorrowTemp={props.tomorrowTemp} next_Weather={props.next_Weather} tomorrowIcon={props.tomorrowIcon}/> }
 {loadmore? "":<Nextweathertwo twoDayWeatherDesc={props.twoDayWeatherDesc} twoDayIcon={props.twoDayIcon} twoDayTemp={props.twoDayTemp} twoDayWeather={props.twoDayWeather} country={props.country}/> }
  <Nextweatherthree threeDayWeatherDesc={props.threeDayWeatherDesc} country={props.country} threeDayWeather={props.threeDayWeather} threeDayTemp={props.threeDayTemp} threeDayIcon={props.threeDayIcon}/>
 {getwidth > 522 || loadmore? <Nextweatherfour  fourDayWeatherDesc={props.fourDayWeatherDesc} country={props.country} fourDayWeather={props.fourDayWeather} fourDayTemp={props.fourDayTemp} fourDayIcon={props.fourDayIcon}/> : ""}
 {getwidth > 641 || loadmore?   <Nextweatherfive  fiveDayWeatherDesctwo={props.fiveDayWeatherDesctwo} setFiveDayWeatherDesc={props.setFiveDayWeatherDesc} fiveDayWeatherDesc={props.fiveDayWeatherDesc} country={props.country} fiveDayWeather={props.fiveDayWeather} fiveDayTemp={props.fiveDayTemp} fiveDayIcon={props.fiveDayIcon}/> : ""}
</div> 
        </>
        
        } 




    </div>
  )
}
