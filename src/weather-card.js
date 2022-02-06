import React, {useState, useEffect, useRef} from "react"
import {useGlobalContext} from "./context";


export function WeatherCard() {


  return (<>
    <CurrentWeather/>
  </>)
}

function CurrentWeather() {
  const {weatherData, currentLocale} = useGlobalContext()

  return (<>
    <p>{currentLocale}</p>
    <p>temperature: {'current' in weatherData ? weatherData.current.temp : ''}</p>
  </>)
}
