import React, {useEffect, useRef, useState} from "react";
import {Autocomplete, Button} from '@mantine/core';
import {MagnifyingGlassIcon} from "@radix-ui/react-icons";

import {useGlobalContext} from "./context";
import {WeatherCard} from "./weather-card";


export function App() {
  return (<>
      <Header/>
      <WeatherCard/>
  </>);
}

const Header = () => {
  return (
      <header>
        <h1 style={{width:400}}>Weather app</h1>
        <SearchBar/>
      </header>
  )
}

const SearchBar = (props) => {
  const [query, setQuery] = useState("")
  const [cityList, setCityList] = useState([])
  const refSearchbox = useRef(null)
  var lat = 0
  var lon = 0

  const {getOneApiUrl, getGeocodeUrl, setWeatherData, setCurrentLocale} = useGlobalContext()


  useEffect(() => {
    const timerid = setTimeout(fetchCities, 3000);
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
    <form id="searchform" style={{ width: 600 }} onSubmit={handleSubmit}>
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
      <Button sx={{marginBlockStart:8, padding:8}} type="submit" leftIcon={<MagnifyingGlassIcon/>}>
        search
      </Button>
    </form>
  )
}

export default App;
