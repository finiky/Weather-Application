import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./GetWeather.module.css";
import getData from "./Api";
const GetWeather = () => {
  const { zipid, countryid } = useParams();
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const time = new Date().toLocaleString();
  useEffect(() => {
    getData(
      setWeather,
      setIsLoading,
      setError,
      setStatus,
      setMsg,
      zipid,
      countryid
    );
  }, [zipid, countryid]);
  if (isLoading) {
    return <p className={styles.loading}>Content is loading...</p>;
  }
  if (error) {
    return (
      <p
        className={styles.error}
      >{`Error loading the content. Error ${status}. ${msg}`}</p>
    );
  }
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Weather Report</h2>
      <p className={styles.time}>Date, Time: {time}</p>
      <ul className={styles.data}>
        <li className={styles.items}>City: {weather.name}</li>
        <li className={styles.items}>Description: {weather.weather[0].main}</li>
        <li className={styles.items}>
          Temperature: {weather.main.temp - 273.15} °C
        </li>
        <li className={styles.items}>Pressure: {weather.main.pressure}</li>
        <li className={styles.items}>Humidity: {weather.main.humidity}</li>
      </ul>
      <Link to="/" className={styles.link}>
        Home
      </Link>
    </div>
  );
};

export default GetWeather;
