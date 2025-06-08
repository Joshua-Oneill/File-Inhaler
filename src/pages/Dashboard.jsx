import { Container, Box, Card, CardContent } from "@mui/material";
import HourlyWeatherCard from "../components/hourlyWeatherCard";
import { useState, useEffect } from "react";
import wmoDescriptions from "../assets/wmoDesccriptions.json";

import { getHourlyForecast, getDailyForecast } from "../services/bomForecast";

function Dashboard() {
  const [hrlyWeatherData, setHrlyWeatherData] = useState(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHrlyWeatherData({
  //       temp: 5,
  //       humidity: 10,
  //       WMOCode: "cloudy",
  //       aparentTemp: 8,
  //       rain: 20,
  //       showers: 20,
  //       icon: "http://openweathermap.org/img/wn/02d@2x.png",
  //     });
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const loadHrlyForecast = async () => {
      try {
        const forecastData = await getHourlyForecast();
        console.log("api response", forecastData);
        const i = 16; //grabs first hour

        const iconCode = forecastData.weather_code[i];
        const wmoDescription = wmoDescriptions[String(iconCode)].night;

        setHrlyWeatherData({
          temp: forecastData.temperature_2m[i],
          humidity: forecastData.relative_humidity_2m[i],
          WMOCode: wmoDescription.description,
          aparentTemp: forecastData.apparent_temperature[i],
          rain: forecastData.rain[i],
          showers: forecastData.showers[i],
          icon: wmoDescription.image,
        });
      } catch (error) {
        console.log(`Failed to load from api: ${error}`);
      } finally {
        ///maybe set loading state to stop if we want to have a loader
      }
    };

    loadHrlyForecast();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "30vh",
      }}
    >
      {/* checks if the hrlyWeatherData state has been filled or !null in this context teh && acts as a conditional operator - if the condition is true load the component */}
      {hrlyWeatherData && (
        <HourlyWeatherCard hourlyForecastData={hrlyWeatherData} />
      )}
    </Box>
  );
}

export default Dashboard;

// const [isLoaded, setIsLoaded] = useState(0);

// useEffect(() => {
//   if (varForAPiCallresult) {
//     setIsLoaded(true);
//   } else {
//     setIsLoaded(false);
//   }
// }, [varForAPiCallresult]);
