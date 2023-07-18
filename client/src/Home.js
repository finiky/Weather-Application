import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate(`/getweather/${zip}/${country}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="zip">Zip Code:</label>
        <input
          id="zip"
          type="text"
          value={zip}
          required
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="country">Country Code:</label>
        <input
          id="country"
          type="text"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button type="submit">Get Weather Information</button>
    </form>
  );
};

export default Home;
