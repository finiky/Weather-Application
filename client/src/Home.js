import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate(`/getweather/${zip}/${country}`);
  };
  return (
    <div>
    <h1 className={styles.name}>Weather Teller</h1>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.child}>
        <label htmlFor="zip">Zip Code</label>
        <input
          className={styles.input}
          id="zip"
          type="text"
          value={zip}
          placeholder="Zip Code"
          required
          onChange={(e) => setZip(e.target.value)}
        />
      </div>
      <div className={styles.child}>
        <label htmlFor="country">Country Code</label>
        <input
          className={styles.input}
          id="country"
          type="text"
          value={country}
          placeholder="Country Code"
          required
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className={styles.child}>
        <button className={styles.button} type="submit">Weather</button>
      </div>
    </form>
    </div>
  );
};

export default Home;
