import React, {useEffect, useRef, useState} from "react";
import {Autocomplete, Button, Header, Text} from '@mantine/core';
import {MagnifyingGlass, MapPinLine} from "phosphor-react";
import "./App.css"

import {useGlobalContext} from "./context";
import {WeatherCard} from "./weather-card";


export function App() {
  const {weatherData} = useGlobalContext()

  return (<div className="App">
    <HeaderContent/>
    <WeatherCard/>
    {/*<AltInfo/>*/}
    {/*conditional render if weatherData is present*/}
    {/* {if(weatherData.current.dt){ <WeatherCard/> }} */}
    {/* {weatherData.current.dt ? (<WeatherCard/>) : (<AltInfo/>)} */}
    <FooterContent/>
  </div>);
}

function HeaderContent() {
  return (
    <Header className="App-header">
      <h1>{`Weather Card`}</h1>
      <SearchBar/>
    </Header>
  )
}

function SearchBar() {
  const [query, setQuery] = useState("")
  const [cityList, setCityList] = useState([])
  const refSearchbox = useRef(null)
  var lat = 28.6517178
  var lon = 77.2219388

  const {getOneApiUrl, getGeocodeUrl, getRevGeocodeUrl, setWeatherData, setCurrentLocale} = useGlobalContext()

  //TODO: use location
  async function getLocalWeather(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        const response = await fetch(getOneApiUrl(lat, lon))
        const data = await response.json()
        const response2 = await fetch(getRevGeocodeUrl(lat, lon))
        const data2 = await response2.json()
        setCurrentLocale(data2[0].name)
        setWeatherData(data)
      });
    }}

  const fetchData = async() => {
    const response = await fetch(getOneApiUrl(lat,lon))
    const data = await response.json()
    //setCurrentLocale("Delhi, IN")
    setWeatherData(data)
  }
  useEffect(()=>{
    fetchData()
  }, [])

  useEffect(() => {
    const timerid = setTimeout(fetchCities, 1000);
    return function () {
      clearTimeout(timerid)
    }
  }, [query])

  const fetchCities = async () => {
    if (query !== "") {
      //console.log("fetching cities")
      const response = await fetch(getGeocodeUrl(query))
      const data = await response.json()
      //console.log(data)
      setCityList(
        data.map((cityObj) => {
          if (cityObj.state) {
            return `${cityObj.name},${cityObj.state},${cityObj.country}`
          } else {
            return `${cityObj.name},${cityObj.country}`
          }
        })
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log(query)
    const queryResponse = await fetch(getGeocodeUrl(query))
    const queryData = await queryResponse.json()
    lat = queryData[0].lat
    lon = queryData[0].lon
    const response = await fetch(getOneApiUrl(lat,lon))
    const data = await response.json()
    //console.log(data)
    setCurrentLocale(query)
    setWeatherData(data)
  }

  return (<>

    <Button
      sx={{
        position: 'absolute',
        top: 38,
        right: 470,
        padding: 6,
        '@media (max-width: 900px)': {
          position: 'absolute',
          top: 20,
          left: 200,
        },
      }}
      leftIcon={<MapPinLine size={16} weight="bold" />} className="currentLocation"
      onClick={()=>{getLocalWeather()}}>get weather</Button>

    <form id="searchform" onSubmit={handleSubmit}>
      <Autocomplete
        className="autocomplete"
        sx={{ width: 300,
          '@media (max-width: 600px)': {
            width: '70%',
          }
        }}
        label="Search location"
        placeholder="city, state, country"
        data={cityList}
        limit={5}
        value={query}
        onChange={setQuery}
        ref={refSearchbox}
      />
      <Button
        sx={{
          position: 'absolute',
          top: 20,
          left: 310,
          'margin-block-start': 8,
          padding: 6,
          '@media (max-width: 600px)': {
            position: 'absolute',
            left: '72%',
          },
        }}
        className="mbutton" type="submit" leftIcon={<MagnifyingGlass size={18} weight="bold" color="#ffffff" />}>
        search
      </Button>
    </form>
  </>)
}

function AltInfo() {
  return(<>
    <Text>search or use
      <Button leftIcon={<MapPinLine size={16} weight="bold" />}>
        current location
      </Button>
    </Text>
  </>)
}

function FooterContent() {
  return (<footer>
    <p>Powered by openweathermap</p>
  </footer>)
}


export default App;
