import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import GetWeather from "./GetWeather";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/getweather/:zipid/:countryid"
          element={<GetWeather />}
        />
      </Routes>
    </div>
  );
}

export default App;
