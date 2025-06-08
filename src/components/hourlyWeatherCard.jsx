import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function HourlyWeatherCard({ hourlyForecastData }) {
  const forcTemp = hourlyForecastData.temp;
  const forcHumidity = hourlyForecastData.humidity;
  const forcWMOCode = hourlyForecastData.WMOCode;
  const forcAparentTemp = hourlyForecastData.aparentTemp;
  const forcRain = hourlyForecastData.rain;
  const forcShowers = hourlyForecastData.showers;
  const weatherIcon = hourlyForecastData.icon;

  return (
    <Card sx={{ padding: 3 }}>
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Box component="img" src={weatherIcon} alt={forcWMOCode} />
          <Typography>{forcWMOCode}</Typography>
          <Typography>{forcTemp}°C</Typography>
          <Typography>Feels Like: {forcAparentTemp}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            // alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>Humidity: {forcHumidity}%</Typography>
          <Typography>Rainfall: {forcRain}mm</Typography>
          <Typography>{forcShowers}mm</Typography>
        </Box>
      </Stack>
    </Card>
  );
}

export default HourlyWeatherCard;

//
