import React, { useState, useEffect } from "react";

import { getTotalData } from "./api";
import { covid19Img } from "./shared";

import { Cards, CountryPicker, Diagram } from "./components";

import "./App.scss";

// interface ITotalData {
//   confirmed: object;
//   recovered: object;
//   deaths: object;
//   lastUpdate: Date;
// }

const App: React.FC = () => {
  const [totalData, setTotalData] = useState<any>({});
  const [countryName, setCountryName] = useState<string>("");

  useEffect(() => {
    const getFetchTotalData = async () => {
      const data: any = await getTotalData(countryName);
      setTotalData(data);
    };
    getFetchTotalData();
  }, [countryName]);

  return (
    <div className="app-container">
      <div className="app-container__head-img">
        <img src={covid19Img} alt="" />
      </div>
      {countryName.length ? <h1>{countryName}</h1> : <h1>Global</h1>}
      <div className="app-container__main">
        <CountryPicker setCountryName={setCountryName} />
        <Cards totalData={totalData} />
        <Diagram totalData={totalData} countryName={countryName} />
      </div>
    </div>
  );
};

export default App;
