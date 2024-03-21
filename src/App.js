import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FlagCard from "./FlagCard";

function App() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetchApi(api_url);
  }, []);

  const api_url = `https://restcountries.com/v3.1/all`;

  const fetchApi = async (url) => {
    try {
      const resp = await axios.get(url);
      setFlags(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      {flags.map((item) => {
        return (
          <FlagCard
            key={item.name.official}
            name={item.name.common}
            img_src={item.flags.svg}
            alt={item.flags.alt}
          />
        );
      })}
    </div>
  );
}

export default App;
