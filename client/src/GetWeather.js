import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./GetWeather.module.css";
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
      <ul className={styles.data}>
        <li className={styles.items}>Description: {weather.weather[0].main}</li>
        <li className={styles.items}>Temperature: {weather.main.temp}</li>
        <li className={styles.items}>Pressure: {weather.main.pressure}</li>
        <li className={styles.items}>Humidity: {weather.main.humidity}</li>
      </ul>
      <Link to="/" className={styles.link} > &larr; Home</Link>
    </div>
  );
};

export default GetWeather;
