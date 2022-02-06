import React, {useState, useContext} from "react";


const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const [weatherData, setWeatherData] = useState({})
  const [currentLocale,setCurrentLocale] = useState('default')

  const apiKey = process.env.REACT_APP_API_KEY

  const getOneApiUrl=(lat,lon)=> {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  }

  const getGeocodeUrl=(query)=> {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;
  }


  return <AppContext.Provider
    value={{weatherData, setWeatherData, currentLocale, setCurrentLocale, getOneApiUrl, getGeocodeUrl}}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext=() => {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}
