import React, {useState, useContext} from "react";


const AppContext = React.createContext()

const AppProvider = ({children}) => {

  const data = {
    "lat": 0,
    "lon": 0,
    "timezone": "Etc/GMT",
    "timezone_offset": 0,
    "current": {
      "dt": 0,
      "sunrise": 1644127838,
      "sunset": 1644171452,
      "temp": 26.51,
      "feels_like": 26.51,
      "pressure": 1011,
      "humidity": 74,
      "dew_point": 21.5,
      "uvi": 0,
      "clouds": 6,
      "visibility": 10000,
      "wind_speed": 4.93,
      "wind_deg": 141,
      "wind_gust": 5.01,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1644123600,
        "temp": 26.5,
        "feels_like": 26.5,
        "pressure": 1011,
        "humidity": 73,
        "dew_point": 21.27,
        "uvi": 0,
        "clouds": 6,
        "visibility": 10000,
        "wind_speed": 4.51,
        "wind_deg": 144,
        "wind_gust": 4.5,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644127200,
        "temp": 26.51,
        "feels_like": 26.51,
        "pressure": 1011,
        "humidity": 74,
        "dew_point": 21.5,
        "uvi": 0,
        "clouds": 6,
        "visibility": 10000,
        "wind_speed": 4.93,
        "wind_deg": 141,
        "wind_gust": 5.01,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644130800,
        "temp": 26.52,
        "feels_like": 26.52,
        "pressure": 1011,
        "humidity": 74,
        "dew_point": 21.51,
        "uvi": 0.54,
        "clouds": 8,
        "visibility": 10000,
        "wind_speed": 5.27,
        "wind_deg": 143,
        "wind_gust": 5.41,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644134400,
        "temp": 26.56,
        "feels_like": 26.56,
        "pressure": 1011,
        "humidity": 74,
        "dew_point": 21.55,
        "uvi": 2.21,
        "clouds": 12,
        "visibility": 10000,
        "wind_speed": 5.75,
        "wind_deg": 143,
        "wind_gust": 5.91,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644138000,
        "temp": 26.63,
        "feels_like": 26.63,
        "pressure": 1012,
        "humidity": 74,
        "dew_point": 21.61,
        "uvi": 5.15,
        "clouds": 13,
        "visibility": 10000,
        "wind_speed": 5.76,
        "wind_deg": 148,
        "wind_gust": 5.91,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644141600,
        "temp": 26.73,
        "feels_like": 28.7,
        "pressure": 1013,
        "humidity": 74,
        "dew_point": 21.71,
        "uvi": 9.07,
        "clouds": 12,
        "visibility": 10000,
        "wind_speed": 6.07,
        "wind_deg": 149,
        "wind_gust": 6.2,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644145200,
        "temp": 26.82,
        "feels_like": 28.86,
        "pressure": 1012,
        "humidity": 74,
        "dew_point": 21.72,
        "uvi": 11.97,
        "clouds": 14,
        "visibility": 10000,
        "wind_speed": 5.62,
        "wind_deg": 150,
        "wind_gust": 5.7,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644148800,
        "temp": 26.85,
        "feels_like": 28.84,
        "pressure": 1012,
        "humidity": 73,
        "dew_point": 21.71,
        "uvi": 13.09,
        "clouds": 13,
        "visibility": 10000,
        "wind_speed": 5.44,
        "wind_deg": 147,
        "wind_gust": 5.5,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644152400,
        "temp": 26.85,
        "feels_like": 28.84,
        "pressure": 1011,
        "humidity": 73,
        "dew_point": 21.7,
        "uvi": 11.99,
        "clouds": 15,
        "visibility": 10000,
        "wind_speed": 5.05,
        "wind_deg": 156,
        "wind_gust": 5.11,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644156000,
        "temp": 26.88,
        "feels_like": 28.89,
        "pressure": 1010,
        "humidity": 73,
        "dew_point": 21.8,
        "uvi": 9.08,
        "clouds": 34,
        "visibility": 10000,
        "wind_speed": 4.99,
        "wind_deg": 157,
        "wind_gust": 5.01,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644159600,
        "temp": 26.88,
        "feels_like": 28.89,
        "pressure": 1009,
        "humidity": 73,
        "dew_point": 21.74,
        "uvi": 5.45,
        "clouds": 31,
        "visibility": 10000,
        "wind_speed": 4.36,
        "wind_deg": 162,
        "wind_gust": 4.33,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644163200,
        "temp": 26.89,
        "feels_like": 28.99,
        "pressure": 1009,
        "humidity": 74,
        "dew_point": 21.86,
        "uvi": 2.35,
        "clouds": 31,
        "visibility": 10000,
        "wind_speed": 4.3,
        "wind_deg": 158,
        "wind_gust": 4.32,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644166800,
        "temp": 26.93,
        "feels_like": 29.06,
        "pressure": 1010,
        "humidity": 74,
        "dew_point": 21.88,
        "uvi": 0.57,
        "clouds": 30,
        "visibility": 10000,
        "wind_speed": 3.86,
        "wind_deg": 158,
        "wind_gust": 3.8,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644170400,
        "temp": 26.97,
        "feels_like": 29.14,
        "pressure": 1010,
        "humidity": 74,
        "dew_point": 21.8,
        "uvi": 0,
        "clouds": 29,
        "visibility": 10000,
        "wind_speed": 3.97,
        "wind_deg": 156,
        "wind_gust": 4,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644174000,
        "temp": 27.1,
        "feels_like": 29.2,
        "pressure": 1011,
        "humidity": 72,
        "dew_point": 21.65,
        "uvi": 0,
        "clouds": 70,
        "visibility": 10000,
        "wind_speed": 3.97,
        "wind_deg": 151,
        "wind_gust": 3.9,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644177600,
        "temp": 27.11,
        "feels_like": 29.13,
        "pressure": 1012,
        "humidity": 71,
        "dew_point": 21.45,
        "uvi": 0,
        "clouds": 85,
        "visibility": 10000,
        "wind_speed": 3.36,
        "wind_deg": 139,
        "wind_gust": 3.42,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644181200,
        "temp": 26.81,
        "feels_like": 28.84,
        "pressure": 1013,
        "humidity": 74,
        "dew_point": 21.75,
        "uvi": 0,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 3.4,
        "wind_deg": 136,
        "wind_gust": 3.4,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644184800,
        "temp": 26.79,
        "feels_like": 28.88,
        "pressure": 1013,
        "humidity": 75,
        "dew_point": 21.99,
        "uvi": 0,
        "clouds": 92,
        "visibility": 10000,
        "wind_speed": 3.16,
        "wind_deg": 143,
        "wind_gust": 3.3,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644188400,
        "temp": 26.9,
        "feels_like": 29.01,
        "pressure": 1013,
        "humidity": 74,
        "dew_point": 21.94,
        "uvi": 0,
        "clouds": 88,
        "visibility": 10000,
        "wind_speed": 3.47,
        "wind_deg": 148,
        "wind_gust": 3.5,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "pop": 0.2,
        "rain": {
          "1h": 0.13
        }
      },
      {
        "dt": 1644192000,
        "temp": 26.91,
        "feels_like": 29.03,
        "pressure": 1012,
        "humidity": 74,
        "dew_point": 21.86,
        "uvi": 0,
        "clouds": 80,
        "visibility": 10000,
        "wind_speed": 3.79,
        "wind_deg": 158,
        "wind_gust": 3.52,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644195600,
        "temp": 26.82,
        "feels_like": 28.86,
        "pressure": 1011,
        "humidity": 74,
        "dew_point": 21.86,
        "uvi": 0,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 4.46,
        "wind_deg": 168,
        "wind_gust": 4.12,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0.04
      },
      {
        "dt": 1644199200,
        "temp": 26.79,
        "feels_like": 28.81,
        "pressure": 1010,
        "humidity": 74,
        "dew_point": 21.72,
        "uvi": 0,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 4.12,
        "wind_deg": 165,
        "wind_gust": 3.91,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644202800,
        "temp": 26.8,
        "feels_like": 28.75,
        "pressure": 1010,
        "humidity": 73,
        "dew_point": 21.56,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 3.72,
        "wind_deg": 165,
        "wind_gust": 3.6,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644206400,
        "temp": 26.78,
        "feels_like": 28.64,
        "pressure": 1010,
        "humidity": 72,
        "dew_point": 21.44,
        "uvi": 0,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 3.59,
        "wind_deg": 159,
        "wind_gust": 3.51,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644210000,
        "temp": 26.82,
        "feels_like": 28.71,
        "pressure": 1011,
        "humidity": 72,
        "dew_point": 21.42,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 4,
        "wind_deg": 153,
        "wind_gust": 4.01,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644213600,
        "temp": 26.9,
        "feels_like": 28.85,
        "pressure": 1011,
        "humidity": 72,
        "dew_point": 21.33,
        "uvi": 0,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 4.16,
        "wind_deg": 155,
        "wind_gust": 4.21,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644217200,
        "temp": 26.96,
        "feels_like": 28.87,
        "pressure": 1012,
        "humidity": 71,
        "dew_point": 21.27,
        "uvi": 0.57,
        "clouds": 46,
        "visibility": 10000,
        "wind_speed": 4.12,
        "wind_deg": 154,
        "wind_gust": 4.2,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644220800,
        "temp": 27.03,
        "feels_like": 28.99,
        "pressure": 1012,
        "humidity": 71,
        "dew_point": 21.26,
        "uvi": 2.36,
        "clouds": 38,
        "visibility": 10000,
        "wind_speed": 3.99,
        "wind_deg": 162,
        "wind_gust": 4.11,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644224400,
        "temp": 27.12,
        "feels_like": 29.06,
        "pressure": 1012,
        "humidity": 70,
        "dew_point": 21.27,
        "uvi": 5.5,
        "clouds": 57,
        "visibility": 10000,
        "wind_speed": 4.15,
        "wind_deg": 162,
        "wind_gust": 4.3,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644228000,
        "temp": 27.23,
        "feels_like": 29.25,
        "pressure": 1012,
        "humidity": 70,
        "dew_point": 21.19,
        "uvi": 9.22,
        "clouds": 59,
        "visibility": 10000,
        "wind_speed": 4.23,
        "wind_deg": 164,
        "wind_gust": 4.32,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644231600,
        "temp": 27.29,
        "feels_like": 29.26,
        "pressure": 1012,
        "humidity": 69,
        "dew_point": 21.21,
        "uvi": 12.17,
        "clouds": 67,
        "visibility": 10000,
        "wind_speed": 4.34,
        "wind_deg": 171,
        "wind_gust": 4.42,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644235200,
        "temp": 27.34,
        "feels_like": 29.44,
        "pressure": 1011,
        "humidity": 70,
        "dew_point": 21.35,
        "uvi": 13.31,
        "clouds": 69,
        "visibility": 10000,
        "wind_speed": 4.6,
        "wind_deg": 170,
        "wind_gust": 4.83,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644238800,
        "temp": 27.36,
        "feels_like": 29.58,
        "pressure": 1010,
        "humidity": 71,
        "dew_point": 21.65,
        "uvi": 12.29,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 5.12,
        "wind_deg": 172,
        "wind_gust": 5.31,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644242400,
        "temp": 27.38,
        "feels_like": 29.72,
        "pressure": 1009,
        "humidity": 72,
        "dew_point": 21.85,
        "uvi": 9.31,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 5.22,
        "wind_deg": 170,
        "wind_gust": 5.31,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644246000,
        "temp": 27.41,
        "feels_like": 29.78,
        "pressure": 1009,
        "humidity": 72,
        "dew_point": 21.85,
        "uvi": 5.59,
        "clouds": 18,
        "visibility": 10000,
        "wind_speed": 4.99,
        "wind_deg": 173,
        "wind_gust": 5.02,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644249600,
        "temp": 27.46,
        "feels_like": 29.87,
        "pressure": 1009,
        "humidity": 72,
        "dew_point": 21.85,
        "uvi": 2.38,
        "clouds": 15,
        "visibility": 10000,
        "wind_speed": 5.14,
        "wind_deg": 172,
        "wind_gust": 5.21,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644253200,
        "temp": 27.49,
        "feels_like": 29.93,
        "pressure": 1009,
        "humidity": 72,
        "dew_point": 21.95,
        "uvi": 0.58,
        "clouds": 23,
        "visibility": 10000,
        "wind_speed": 5.09,
        "wind_deg": 164,
        "wind_gust": 5.2,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644256800,
        "temp": 27.49,
        "feels_like": 29.93,
        "pressure": 1010,
        "humidity": 72,
        "dew_point": 22.05,
        "uvi": 0,
        "clouds": 20,
        "visibility": 10000,
        "wind_speed": 4.44,
        "wind_deg": 160,
        "wind_gust": 4.52,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644260400,
        "temp": 27.47,
        "feels_like": 29.89,
        "pressure": 1011,
        "humidity": 72,
        "dew_point": 21.95,
        "uvi": 0,
        "clouds": 16,
        "visibility": 10000,
        "wind_speed": 3.66,
        "wind_deg": 159,
        "wind_gust": 3.84,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644264000,
        "temp": 27.43,
        "feels_like": 29.81,
        "pressure": 1011,
        "humidity": 72,
        "dew_point": 22.05,
        "uvi": 0,
        "clouds": 23,
        "visibility": 10000,
        "wind_speed": 3.91,
        "wind_deg": 152,
        "wind_gust": 4.01,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644267600,
        "temp": 27.42,
        "feels_like": 29.9,
        "pressure": 1012,
        "humidity": 73,
        "dew_point": 22.15,
        "uvi": 0,
        "clouds": 15,
        "visibility": 10000,
        "wind_speed": 4.56,
        "wind_deg": 147,
        "wind_gust": 4.8,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644271200,
        "temp": 27.38,
        "feels_like": 29.83,
        "pressure": 1012,
        "humidity": 73,
        "dew_point": 22.25,
        "uvi": 0,
        "clouds": 12,
        "visibility": 10000,
        "wind_speed": 4.89,
        "wind_deg": 149,
        "wind_gust": 5.1,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644274800,
        "temp": 27.3,
        "feels_like": 29.67,
        "pressure": 1012,
        "humidity": 73,
        "dew_point": 22.15,
        "uvi": 0,
        "clouds": 10,
        "visibility": 10000,
        "wind_speed": 4.46,
        "wind_deg": 152,
        "wind_gust": 4.6,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644278400,
        "temp": 27.15,
        "feels_like": 29.48,
        "pressure": 1011,
        "humidity": 74,
        "dew_point": 22.11,
        "uvi": 0,
        "clouds": 10,
        "visibility": 10000,
        "wind_speed": 4.88,
        "wind_deg": 151,
        "wind_gust": 4.91,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644282000,
        "temp": 26.98,
        "feels_like": 29.25,
        "pressure": 1010,
        "humidity": 75,
        "dew_point": 22.15,
        "uvi": 0,
        "clouds": 6,
        "visibility": 10000,
        "wind_speed": 5,
        "wind_deg": 154,
        "wind_gust": 5.02,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644285600,
        "temp": 26.87,
        "feels_like": 29.03,
        "pressure": 1010,
        "humidity": 75,
        "dew_point": 22.05,
        "uvi": 0,
        "clouds": 6,
        "visibility": 10000,
        "wind_speed": 4.24,
        "wind_deg": 153,
        "wind_gust": 4.22,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644289200,
        "temp": 26.77,
        "feels_like": 28.85,
        "pressure": 1010,
        "humidity": 75,
        "dew_point": 22.06,
        "uvi": 0,
        "clouds": 10,
        "visibility": 10000,
        "wind_speed": 3.77,
        "wind_deg": 148,
        "wind_gust": 3.8,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "pop": 0
      },
      {
        "dt": 1644292800,
        "temp": 26.69,
        "feels_like": 28.77,
        "pressure": 1010,
        "humidity": 76,
        "dew_point": 22.19,
        "uvi": 0,
        "clouds": 32,
        "visibility": 10000,
        "wind_speed": 3.83,
        "wind_deg": 145,
        "wind_gust": 3.9,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "pop": 0
      }
    ],
    "daily": [
      {
        "dt": 1644148800,
        "sunrise": 1644127838,
        "sunset": 1644171452,
        "moonrise": 1644143100,
        "moonset": 1644187560,
        "moon_phase": 0.18,
        "temp": {
          "day": 26.85,
          "min": 26.49,
          "max": 27.11,
          "night": 26.9,
          "eve": 26.97,
          "morn": 26.51
        },
        "feels_like": {
          "day": 28.84,
          "night": 29.01,
          "eve": 29.14,
          "morn": 26.51
        },
        "pressure": 1012,
        "humidity": 73,
        "dew_point": 21.71,
        "wind_speed": 6.07,
        "wind_deg": 149,
        "wind_gust": 6.2,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 13,
        "pop": 0.2,
        "rain": 0.13,
        "uvi": 13.09
      },
      {
        "dt": 1644235200,
        "sunrise": 1644214243,
        "sunset": 1644257856,
        "moonrise": 1644232140,
        "moonset": 1644276600,
        "moon_phase": 0.22,
        "temp": {
          "day": 27.34,
          "min": 26.78,
          "max": 27.49,
          "night": 27.3,
          "eve": 27.49,
          "morn": 26.9
        },
        "feels_like": {
          "day": 29.44,
          "night": 29.67,
          "eve": 29.93,
          "morn": 28.85
        },
        "pressure": 1011,
        "humidity": 70,
        "dew_point": 21.35,
        "wind_speed": 5.22,
        "wind_deg": 170,
        "wind_gust": 5.31,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 69,
        "pop": 0.04,
        "uvi": 13.31
      },
      {
        "dt": 1644321600,
        "sunrise": 1644300647,
        "sunset": 1644344259,
        "moonrise": 1644321180,
        "moonset": 0,
        "moon_phase": 0.25,
        "temp": {
          "day": 27.02,
          "min": 26.65,
          "max": 27.32,
          "night": 27.22,
          "eve": 27.32,
          "morn": 26.67
        },
        "feels_like": {
          "day": 29.6,
          "night": 30.02,
          "eve": 30.13,
          "morn": 28.88
        },
        "pressure": 1011,
        "humidity": 78,
        "dew_point": 22.92,
        "wind_speed": 5.95,
        "wind_deg": 152,
        "wind_gust": 6.11,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": 26,
        "pop": 0,
        "uvi": 13.52
      },
      {
        "dt": 1644408000,
        "sunrise": 1644387050,
        "sunset": 1644430662,
        "moonrise": 1644410220,
        "moonset": 1644365580,
        "moon_phase": 0.28,
        "temp": {
          "day": 27.36,
          "min": 26.87,
          "max": 27.45,
          "night": 27.33,
          "eve": 27.43,
          "morn": 27.37
        },
        "feels_like": {
          "day": 30,
          "night": 30.15,
          "eve": 30.25,
          "morn": 29.81
        },
        "pressure": 1011,
        "humidity": 75,
        "dew_point": 22.65,
        "wind_speed": 6.16,
        "wind_deg": 156,
        "wind_gust": 6.61,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 68,
        "pop": 1,
        "rain": 1.57,
        "uvi": 13.6
      },
      {
        "dt": 1644494400,
        "sunrise": 1644473452,
        "sunset": 1644517064,
        "moonrise": 1644499500,
        "moonset": 1644454800,
        "moon_phase": 0.31,
        "temp": {
          "day": 27.43,
          "min": 26.85,
          "max": 27.43,
          "night": 26.97,
          "eve": 27.38,
          "morn": 27.1
        },
        "feels_like": {
          "day": 30.37,
          "night": 29.58,
          "eve": 30.37,
          "morn": 29.48
        },
        "pressure": 1010,
        "humidity": 77,
        "dew_point": 23,
        "wind_speed": 7.04,
        "wind_deg": 166,
        "wind_gust": 7.43,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 2,
        "pop": 0.56,
        "rain": 0.89,
        "uvi": 13.75
      },
      {
        "dt": 1644580800,
        "sunrise": 1644559854,
        "sunset": 1644603464,
        "moonrise": 1644588840,
        "moonset": 1644544080,
        "moon_phase": 0.34,
        "temp": {
          "day": 27.49,
          "min": 26.74,
          "max": 27.52,
          "night": 27.31,
          "eve": 27.48,
          "morn": 27.18
        },
        "feels_like": {
          "day": 30.27,
          "night": 30.22,
          "eve": 30.36,
          "morn": 29.54
        },
        "pressure": 1009,
        "humidity": 75,
        "dew_point": 22.65,
        "wind_speed": 7.71,
        "wind_deg": 164,
        "wind_gust": 8.22,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 37,
        "pop": 0.84,
        "rain": 1.32,
        "uvi": 14
      },
      {
        "dt": 1644667200,
        "sunrise": 1644646254,
        "sunset": 1644689865,
        "moonrise": 1644678240,
        "moonset": 1644633480,
        "moon_phase": 0.37,
        "temp": {
          "day": 27.63,
          "min": 26.8,
          "max": 27.74,
          "night": 27.31,
          "eve": 27.59,
          "morn": 26.96
        },
        "feels_like": {
          "day": 30.56,
          "night": 30.11,
          "eve": 30.6,
          "morn": 29.38
        },
        "pressure": 1010,
        "humidity": 75,
        "dew_point": 22.87,
        "wind_speed": 6.3,
        "wind_deg": 158,
        "wind_gust": 6.9,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 74,
        "pop": 0.6,
        "rain": 1.13,
        "uvi": 14
      },
      {
        "dt": 1644753600,
        "sunrise": 1644732654,
        "sunset": 1644776264,
        "moonrise": 1644767760,
        "moonset": 1644722940,
        "moon_phase": 0.4,
        "temp": {
          "day": 27.31,
          "min": 26.7,
          "max": 27.43,
          "night": 27.43,
          "eve": 27.34,
          "morn": 26.99
        },
        "feels_like": {
          "day": 29.59,
          "night": 29.6,
          "eve": 29.54,
          "morn": 29.35
        },
        "pressure": 1011,
        "humidity": 72,
        "dew_point": 21.82,
        "wind_speed": 6.31,
        "wind_deg": 166,
        "wind_gust": 6,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": 48,
        "pop": 0.2,
        "rain": 0.32,
        "uvi": 14
      }
    ]
  }

  const [weatherData, setWeatherData] = useState(data)
  const [currentLocale,setCurrentLocale] = useState('Delhi, IN')

  const apiKey = process.env.REACT_APP_API_KEY

  const getOneApiUrl=(lat,lon)=> {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  }

  const getGeocodeUrl=(query)=> {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;
  }

  const getRevGeocodeUrl=(lat,lon)=> {
    return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`
  }


  return <AppContext.Provider
    value={{weatherData, setWeatherData, currentLocale, setCurrentLocale, getOneApiUrl, getGeocodeUrl, getRevGeocodeUrl}}>
    {children}
  </AppContext.Provider>
}

const useGlobalContext=() => {
  return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}
