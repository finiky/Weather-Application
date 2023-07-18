import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GetWeather = () => {
  const { zipid, countryid } = useParams();
  const [weather, setWeather] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://localhost:5000/getweather/${zipid}/${countryid}`
      );
      const data = await response.json();
      setWeather(data);
    };
    getData();
  }, [zipid, countryid]);
  return <>{console.log(weather)}</>;
};

export default GetWeather;
