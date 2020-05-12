import React, { useState, useEffect } from "react";

import { getTotalDaily } from "../../api";

import { Line, Bar } from "react-chartjs-2";

import "./diagram.styles.scss";

const Diagram: React.FC<any> = ({ countryName, totalData }) => {
  const [totalDaily, setTotalDaily] = useState([]);

  useEffect(() => {
    const fetchDaily = async () => {
      const data: any = await getTotalDaily();
      setTotalDaily(data);
    };
    fetchDaily();
  }, []);

  const lineChart = totalDaily.length && !countryName && (
    <Line
      data={{
        labels: totalDaily.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: totalDaily.map(({ confirmed: { total } }) => total),
            label: "Confirmed",
            borderColor: "blue"
          },
          {
            data: totalDaily.map(({ recovered: { total } }) => total),
            label: "Recovered",
            borderColor: "green"
          },
          {
            data: totalDaily.map(({ deaths: { total } }) => total),
            label: "Deaths",
            borderColor: "red"
          }
        ]
      }}
    />
  );

  const BarChart = countryName && totalData.confirmed && (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [
              totalData && totalData.confirmed.value,
              totalData && totalData.recovered.value,
              totalData && totalData.deaths.value
            ]
          }
        ]
      }}
    />
  );

  return (
    <div className="diagram-container">
      {lineChart}
      {BarChart}
    </div>
  );
};

export default Diagram;
