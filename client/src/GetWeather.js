import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GetWeather = () => {
  const { zipid, countryid } = useParams();
  const [weather, setWeather] = useState({});
  const [isLoading, setIssLoading] = useState(true);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:5000/getweather/${zipid}/${countryid}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        setIssLoading(false);
      }
      if (!response.ok) {
        const data = await response.json();
        setIssLoading(false);
        setError(true);
        setStatus(response.status);
        setMsg(data.message);
      }
    };
    getData();
  }, [zipid, countryid]);
  if (isLoading) {
    return <p>Content is loading...</p>;
  }
  if (error) {
    return <p>{`Error loading the content. Error ${status}. ${msg}`}</p>;
  }
  return (
    <>
      <h2>{weather.weather[0].main}</h2>
      <h3>{weather.weather[0].description}</h3>
      <h4>{weather.main.temp}</h4>
      <h5>{weather.main.feels_like}</h5>
      <h6>{weather.main.pressure}</h6>
    </>
  );
};

export default GetWeather;
