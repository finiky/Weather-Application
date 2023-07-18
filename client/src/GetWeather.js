import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GetWeather = () => {
  const { zipid, countryid } = useParams();
  const [weather, setWeather] = useState({});
  const [isLoading, setIssLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:5000/getweather/${zipid}/${countryid}`
      );
      const data = await response.json();
      setWeather(data);
      setIssLoading(false);
    };
    getData();
  }, [zipid, countryid]);
  if (isLoading) {
    return (
      <>
        <p>is loading...</p>
      </>
    );
  }
  return (
    <>
      <p>{weather.weather[0].main}</p>
      <p>{weather.weather[0].description}</p>
      <p>{weather.weather[0].main}</p>
      <p>{weather.main.temp}</p>
      <p>{weather.main.feels_like}</p>
      <p>{weather.main.pressure}</p>
      <p>{weather.main.humidity}</p>
    </>
  );
};

export default GetWeather;
