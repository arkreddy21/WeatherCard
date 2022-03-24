import React from "react"
import {useGlobalContext} from "./context";
import {Text, Title, SimpleGrid, Space} from "@mantine/core";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import "./weather-card.css"
import uvi from "./icons/uvi.svg"
//import faker from "@faker-js/faker";


export function WeatherCard() {

  return (<div className="weather-card">
    <CurrentWeather/>
    <HourlyWeather/>
    <WeeklyWeather/>
  </div>)
}

function CurrentWeather() {
  const {weatherData, currentLocale} = useGlobalContext()
  var imgUrl = `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`


  return (<>
    <Title order={1}>{currentLocale}</Title>
    <div className="mainInfo">
      <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@4x.png`} />
      <Title order={3} className="value">{`${weatherData.current.temp}\u00B0C`}</Title>
      <Title order={3} className="desc">{weatherData.current.weather[0].description}</Title>
    </div>

    <SimpleGrid
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 900, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
      className="current-weather-grid" cols={3} spacing="md">

      {/*<div>
        <img src="https://img.icons8.com/office/80/000000/thermometer.png"/>
        <Text className="label" >Temperature</Text>
        <Text className="value">{`${weatherData.current.temp}\u00B0C`}</Text>
      </div>*/}

      <div>
        <img src="https://img.icons8.com/office/80/000000/temperature-outside.png"/>
        <Text className="label">Feels like</Text>
        <Text className="value">{`${weatherData.current.feels_like}\u00B0C`}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/barometer-gauge.png"/>
        <Text className="label" >Pressure</Text>
        <Text className="value">{`${weatherData.current.pressure} mbar`}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/humidity.png"/>
        <Text className="label">Humidity</Text>
        <Text className="value">{`${weatherData.current.humidity}%`}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/dew-point.png"/>
        <Text className="label">Dew point</Text>
        <Text className="value">{`${weatherData.current.dew_point}\u00B0`}</Text>
      </div>

      <div>
        <img src={uvi}/>
        <Text className="label">UV index</Text>
        <Text className="value">{weatherData.current.uvi}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/wind-gauge.png"/>
        <Text className="label">Wind speed</Text>
        <Text className="value">{`${(weatherData.current.wind_speed*3.6).toFixed(2)} Km/h`}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/sunrise--v1.png"/>
        <Text className="label">Sunrise</Text>
        <Text className="value">{new Date(weatherData.current.sunrise*1000).toLocaleTimeString()}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/sunset--v1.png"/>
        <Text className="label">Sunset</Text>
        <Text className="value">{new Date(weatherData.current.sunset*1000).toLocaleTimeString()}</Text>
      </div>

    </SimpleGrid>
    <Space h="xl"/>

  </>)
}


function HourlyWeather() {

  const {weatherData} = useGlobalContext()
  const hour_array = weatherData.hourly.slice(0,25)
  const hours = hour_array.map((el)=> new Date(el.dt*1000).toLocaleTimeString().slice(0,-9)+" "+new Date(el.dt*1000).toLocaleTimeString().slice(-2))
  const htemps = hour_array.map((el)=> el.temp)
  const fhtemps = htemps.map((el)=>`${el}\u00B0C`)
  const data = []
  for (let i = 0; i < hours.length; i++){
    data[i] = {hour:hours[i], temp: htemps[i], ftemp: fhtemps[i]}
  }



  return(<>
    <Title order={3} sx={{paddingTop:15,paddingBottom:10}}>Hourly temperature</Title>

    <div className="FakeLine" >
      <LineChart width={1965} height={400} data={data}>
        <Line type="monotone" dataKey="temp" stroke="#8884d8" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
      </LineChart>

      <div style={{overflow:"visible", width:1990, marginLeft:22 }}>
        {hour_array.map((el)=>{
          return <img style={{width:64, marginLeft:14}} src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}/>
        })}
      </div>
    </div>

  </>)
}


function WeeklyWeather() {
  const {weatherData} = useGlobalContext()

  return(<>
    <Space h="xl"/>
    <Title order={2}>This week</Title>

    {weatherData.daily.slice(1,8).map((element)=>{
      return <div className="weekDayDiv">
        <img src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`} />
        <Text className="weekDayDesc">{element.weather[0].main}</Text>
        <Text className="weekDay">{new Date(element.dt*1000).toDateString().slice(0,-5)}</Text>
        <div className="weekTemp">
          <img style={{width:28}} src="https://img.icons8.com/office/80/000000/thermometer.png"/>
          <Text className="weekTempText">{`${element.temp.max}\u00B0C | ${element.temp.min}\u00B0C`}</Text>
        </div>
      </div>
    })}

  </>)
}
