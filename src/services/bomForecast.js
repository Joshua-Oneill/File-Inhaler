/*
https://www.bom.gov.au/fwo/IDN60901/IDN60901.95765.json - this is for station observations and not predicitons

https://api.weather.bom.gov.au/v1//locations?search=Sydney%20Olympic%20Park - enter here to search for a location and find the geohash

https://api.weather.bom.gov.au/v1//locations/<geohash>/forecasts/daily
*/

const HOURLY_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-33.8498&longitude=151.0683&hourly=temperature_2m,relative_humidity_2m,weather_code,apparent_temperature,rain,showers&models=bom_access_global&timezone=Australia%2FSydney&forecast_days=3"
const DAILY_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-33.8498&longitude=151.0683&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&models=bom_access_global&timezone=Australia%2FSydney&forecast_days=3"

 export const getHourlyForecast = async () => {
    try {
        const response = await fetch(HOURLY_API_URL);

        if(!response.ok){ throw new Error(`HTTP ERROR status ${response.status}`)};

        const data = await response.json();
        return data.hourly;

    } catch (error){
        console.error('Error fetching the hourly forecast', error);
        return null;
    }
    
 };

  export const getDailyForecast = async () => {
    try {
        const response = await fetch(DAILY_API_URL);

        if(!response.ok){ throw new Error(`HTTP ERROR status ${response.status}`)};

        const data = await response.json();
        return data.daily;

    } catch (error){
        console.error('Error fetching the daily forecast', error);
        return null;
    }
    
 }