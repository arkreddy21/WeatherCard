import React from "react"
import {useGlobalContext} from "./context";
import {Text, Title, SimpleGrid} from "@mantine/core";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  Title as CTitle, Tooltip, Legend,} from 'chart.js';
import {Line} from "react-chartjs-2"
import "./weather-card.css"
import uvi from "./icons/uvi.svg"
//import faker from "@faker-js/faker";


export function WeatherCard() {

  return (<div className="weather-card">
    <CurrentWeather/>
    <HourlyWeather/>
  </div>)
}

function CurrentWeather() {
  const {weatherData, currentLocale} = useGlobalContext()

  //TODO: change icon according to weather. display weather condition
  return (<>
    <Title order={1}>{currentLocale}</Title>
    {/*<p>temperature: {'current' in weatherData ? weatherData.current.temp : ''}</p>*/}
    <img src="https://img.icons8.com/office/80/000000/fog-day--v2.png"/>
    {/* try changing png to gif */}


    <SimpleGrid
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: 'md' },
        { maxWidth: 900, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
      className="current-weather-grid" cols={3} spacing="md">

      <div>
        <img src="https://img.icons8.com/office/80/000000/thermometer.png"/>
        <Text className="label" >Temperature</Text>
        <Text className="value">{weatherData.current.temp}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/temperature-outside.png"/>
        <Text className="label">Feels like</Text>
        <Text className="value">{weatherData.current.feels_like}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/barometer-gauge.png"/>
        <Text className="label" >Pressure</Text>
        <Text className="value">{weatherData.current.pressure}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/humidity.png"/>
        <Text className="label">Humidity</Text>
        <Text className="value">{weatherData.current.humidity}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/dew-point.png"/>
        <Text className="label">Dew point</Text>
        <Text className="value">{weatherData.current.dew_point}</Text>
      </div>

      <div>
        <img src={uvi}/>
        <Text className="label">UV index</Text>
        <Text className="value">{weatherData.current.uvi}</Text>
      </div>

      <div>
        <img src="https://img.icons8.com/office/80/000000/wind-gauge.png"/>
        <Text className="label">Wind speed</Text>
        <Text className="value">{weatherData.current.wind_speed}</Text>
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


  </>)
}

function HourlyWeather() {

  const {weatherData} = useGlobalContext()
  const hour_array = weatherData.hourly
  const hours = hour_array.map((el)=> new Date(el.dt*1000).toLocaleTimeString())
  const htemps = hour_array.map((el)=> el.temp)


  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, CTitle, Tooltip, Legend);
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'aug', 'sep'];
  const labels = hours
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        //data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        data: htemps,
        borderColor: 'rgb(77,88,241)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  const options = {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Hourly temperature data',
      },
    },
  };

  return(<div>
    <div className="FakeLine" >
      <Line options={options} data={data} height={400} width={1400} />
    </div>
  </div>)
}


/*const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};*/

/*const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
/!*    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },*!/
  ],*/