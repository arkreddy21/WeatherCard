import React, {useEffect, useRef, useState} from "react";
import {Autocomplete, Button, Header} from '@mantine/core';
import {MagnifyingGlass} from "phosphor-react";
import "./App.css"

import {useGlobalContext} from "./context";
import {WeatherCard} from "./weather-card";


export function App() {
  return (<div className="App">
    <HeaderContent/>
    {/*render weather components only if weatherData is present. or set a default data ex:delhi*/}
    <WeatherCard/>
    <FooterContent/>
  </div>);
}

function HeaderContent() {
  return (
    <Header className="App-header">
      <h1>Weather app</h1>
      <SearchBar/>
    </Header>
  )
}

function SearchBar() {
  const [query, setQuery] = useState("")
  const [cityList, setCityList] = useState([])
  const refSearchbox = useRef(null)
  var lat = 0
  var lon = 0

  const {getOneApiUrl, getGeocodeUrl, getRevGeocodeUrl, setWeatherData, setCurrentLocale} = useGlobalContext()

  //use location
  /*useEffect(()=>{
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const response = await fetch(getOneApiUrl(lat, lon))
      const data = await response.json()
      const response2 = await fetch(getRevGeocodeUrl(lat,lon))
      const data2 = await response2.json()
      setCurrentLocale(data2[0].name)
      setWeatherData(data)
    });
  } else {
    console.log("geolocation is not supported by browser");
  }},[])*/

  useEffect(() => {
    const timerid = setTimeout(fetchCities, 2000);
    return function () {
      clearTimeout(timerid)
    }
  }, [query])

  const fetchCities = async () => {
    if (query !== "") {
      console.log("fetching cities")
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
    console.log(query)
    const queryResponse = await fetch(getGeocodeUrl(query))
    const queryData = await queryResponse.json()
    //TODO: current bugs: example delhi,US has multiple cities but only takes first one
    lat = queryData[0].lat
    lon = queryData[0].lon
    const response = await fetch(getOneApiUrl(lat,lon))
    const data = await response.json()
    console.log(data)
    setCurrentLocale(query)
    setWeatherData(data)
  }

  return (
    <form id="searchform" onSubmit={handleSubmit}>
      <Autocomplete
        sx={{ width: 300 }}
        label="Search location"
        placeholder="city, state, country"
        data={cityList}
        limit={5}
        value={query}
        onChange={setQuery}
        ref={refSearchbox}
      />
      <Button type="submit" leftIcon={<MagnifyingGlass size={18} weight="bold" color="#ffffff" />}>
        search
      </Button>
    </form>
  )
}

function FooterContent() {
  return (<footer>
    <p>This is some footer text</p>
  </footer>)
}

export default App;
