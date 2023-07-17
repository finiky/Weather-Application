import { useState } from "react";
const Home = () => {
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit()}>
      <div>
        <label htmlFor="zip">Zip Code:</label>
        <input
          id="zip"
          type="text"
          value={zip}
          placeholder="Zip Code"
          onChange={(e) => setZip(e)}
        />
      </div>
      <div>
        <label htmlFor="country">Country Code:</label>
        <input
          id="country"
          type="text"
          value={country}
          placeholder="Country Code"
          onChange={(e) => setCountry(e)}
        />
      </div>
      <button type="submit">Get Weather Information</button>
    </form>
  );
};

export default Home;
