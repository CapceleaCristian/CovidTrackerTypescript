import React, { useState, useEffect } from "react";

import { getTotalData } from "./api";
import { covid19Img } from "./shared";

import { Cards } from "./components";

import "./App.scss";

const App: React.FC = () => {
  const [totalData, setTotalData] = useState({});

  useEffect(() => {
    const getFetchTotalData = async () => {
      const data: any = await getTotalData();
      setTotalData(data);
    };
    getFetchTotalData();
  }, []);

  return (
    <div className="app-container">
      <div className="app-container__head-img">
        <img src={covid19Img} alt="" />
      </div>
      <div className="app-container__main">
        <Cards />
      </div>
    </div>
  );
};

export default App;
