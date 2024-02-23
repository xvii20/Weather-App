import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import WeatherUiToday from './components/weatherui';
import { Inputbar } from './components/inputbar';
import { Box, CircularProgress, Stack } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

// import { eventProp } from './components/inputbar';

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

function App() {
  // let [value,setValue] = useState("")
  let [lat, setLat] = useState<string>(''); // get the latitude of the text in the input bar
  let [lon, setLon] = useState<string>(''); // get the longitude of the text in the input bar
  let [loading, setLoading] = useState<boolean>(false);
  // Todays Weather info
  let [city, setCity] = useState<string>('');
  let [country, setCountry] = useState<string>('');
  let [date, setDate] = useState<string>('');
  let [time, setTime] = useState<string>('');
  let [weatherDescription, setWeatherDescription] = useState<string>(''); // data.weather.description
  let [temperature, setTemperature] = useState<string>('');
  let [main, setMain] = useState<string>('');
  let [humidity, setHumidity] = useState<string>('');
  let [windSpeed, setWindSpeed] = useState<string | number>('');
  let [icon, setIcon] = useState<string>('');
  let [fetchSuccess, setFetchSuccess] = useState<boolean>(false);

  // Tomorrows Weather Info
  let [next_Weather, setNext_Weather] = useState<string>(''); // set tomorrows main weather
  let [tomorrowIcon, setTomorrowIcon] = useState<string>('');
  let [tomorrowTemp, setTomorrowTemp] = useState<string>('');
  let [tomorrowWeatherDesc, setTomorrowWeatherDesc] = useState<string>('');

  // 2 days Weather Info
  let [twoDayWeather, setTwoDayWeather] = useState<string>('');
  let [twoDayIcon, setTwoDayIcon] = useState<string>('');
  let [twoDayTemp, setTwoDayTemp] = useState<string>('');
  let [twoDayWeatherDesc, setTwoDayWeatherDesc] = useState<string>('');

  // 3 days Weather Info
  let [threeDayWeather, setThreeDayWeather] = useState<string>('');
  let [threeDayIcon, setThreeDayIcon] = useState<string>('');
  let [threeDayTemp, setThreeDayTemp] = useState<string>('');
  let [threeDayWeatherDesc, setThreeDayWeatherDesc] = useState<string>('');

  // 4 days Weather info
  let [fourDayWeather, setFourDayWeather] = useState<string>('');
  let [fourDayIcon, setFourDayIcon] = useState<string>('');
  let [fourDayTemp, setFourDayTemp] = useState<string>('');
  let [fourDayWeatherDesc, setFourDayWeatherDesc] = useState<string>('');

  //5 days Weather info
  let [fiveDayWeather, setFiveDayWeather] = useState<string>('');
  let [fiveDayIcon, setFiveDayIcon] = useState<string>('');
  let [fiveDayTemp, setFiveDayTemp] = useState<string>('');
  let [fiveDayWeatherDesc, setFiveDayWeatherDesc] = useState<string>('');
  let [fiveDayWeatherDesctwo, setFiveDayWeatherDesctwo] = useState<string>('');

  /* remove date */
  let [removeDate, setRemoveDate] = useState<boolean>(false);

  /* after 3 seconds */
  let [removeanim, setremoveanim] = useState<boolean>(false);

  const [alertOpen, setAlertOpen] = useState(false);

  let getdate = new Date();

  getdate.toLocaleDateString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // If isLoading is true, render a loading component
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  // closes the mui alert
  const handleClose = () => {
    setAlertOpen(false);
  };

  return (
    <div className="App">
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ zIndex: 9999 }}
      >
        <MuiAlert
          onClose={handleClose}
          severity="error"
          sx={{
            textAlign: 'center',
            '.MuiAlert-action': {
              padding: '0px', // Adjust padding

              border: 'none',
            },
          }}
        >
          <AlertTitle>Error</AlertTitle>
          {`Sorry we cannot get weather data for the given location`}
        </MuiAlert>
      </Snackbar>

      {removeDate == false ? (
        <div className="header cssanimation blurIn">
          {' '}
          <h1 className="headerwords ">
            {' '}
            {getdate.toLocaleDateString('default', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
          </h1>
        </div>
      ) : (
        ''
      )}
      <Inputbar
        setRemoveDate={setRemoveDate}
        setFiveDayWeatherDesctwo={setFiveDayWeatherDesctwo}
        setFiveDayWeather={setFiveDayWeather}
        setFiveDayIcon={setFiveDayIcon}
        setFiveDayTemp={setFiveDayTemp}
        setFiveDayWeatherDesc={setFiveDayWeatherDesc}
        setFourDayIcon={setFourDayIcon}
        setFourDayWeather={setFourDayWeather}
        setFourDayTemp={setFourDayTemp}
        setFourDayWeatherDesc={setFourDayWeatherDesc}
        setWindSpeed={setWindSpeed}
        setThreeDayWeatherDesc={setThreeDayWeatherDesc}
        setTwoDayWeatherDesc={setTwoDayWeatherDesc}
        setTomorrowWeatherDesc={setTomorrowWeatherDesc}
        setLat={setLat}
        setLon={setLon}
        setWeatherDescription={setWeatherDescription}
        setTime={setTime}
        setDate={setDate}
        setCountry={setCountry}
        setCity={setCity}
        setTemperature={setTemperature}
        setMain={setMain}
        setHumidity={setHumidity}
        setLoading={setLoading}
        setNext_Weather={setNext_Weather}
        setIcon={setIcon}
        setTomorrowIcon={setTomorrowIcon}
        setTomorrowTemp={setTomorrowTemp}
        setTwoDayIcon={setTwoDayIcon}
        setTwoDayTemp={setTwoDayTemp}
        setTwoDayWeather={setTwoDayWeather}
        setThreeDayIcon={setThreeDayIcon}
        setThreeDayTemp={setThreeDayTemp}
        setThreeDayWeather={setThreeDayWeather}
        setFetchSuccess={setFetchSuccess}
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
      />

      <WeatherUiToday
        fiveDayWeatherDesctwo={fiveDayWeatherDesctwo}
        setFiveDayWeatherDesc={setFiveDayWeatherDesc}
        fourDayWeather={fourDayWeather}
        fourDayIcon={fourDayIcon}
        fourDayTemp={fourDayTemp}
        fourDayWeatherDesc={fourDayWeatherDesc}
        fiveDayWeather={fiveDayWeather}
        fiveDayIcon={fiveDayIcon}
        fiveDayWeatherDesc={fiveDayWeatherDesc}
        fiveDayTemp={fiveDayTemp}
        humidity={humidity}
        windSpeed={windSpeed}
        fetchSuccess={fetchSuccess}
        tomorrowWeatherDesc={tomorrowWeatherDesc}
        twoDayWeatherDesc={twoDayWeatherDesc}
        threeDayWeatherDesc={threeDayWeatherDesc}
        lat={lat}
        lon={lon}
        city={city}
        country={country}
        weatherDescription={weatherDescription}
        temperature={temperature}
        main={main}
        loading={loading}
        next_Weather={next_Weather}
        icon={icon}
        tomorrowIcon={tomorrowIcon}
        tomorrowTemp={tomorrowTemp}
        twoDayIcon={twoDayIcon}
        twoDayTemp={twoDayTemp}
        twoDayWeather={twoDayWeather}
        threeDayIcon={threeDayIcon}
        threeDayTemp={threeDayTemp}
        threeDayWeather={threeDayWeather}
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
      />
    </div>
  );
}

export default App;
