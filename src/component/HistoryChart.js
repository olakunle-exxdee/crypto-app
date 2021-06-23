import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { historyOPtion } from "../chartConfig/chartConfigs";

const HistoryChart = ({ data }) => {
  const chartRef = useRef();
  const { day, week, year, detail } = data;
  const [timeFormat, setTimeFormat] = useState("24h");

  const determineTImeFormat = () => {
    switch (timeFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current && detail) {
      const chartInstance = new Chartjs(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${detail.name} Price`,
              data: determineTImeFormat(),
              backgroundColor: "rgba(137, 196, 244, 0.8)",
              borderColor: "rgba(137, 196, 244, 0.2)",
              pointRadius: 0,
            },
          ],
        },
        options: {
          ...historyOPtion,
        },
      });
      return chartInstance;
    }
  });

  return (
    <div className="bg-white border mt-2 rounded p-3 ">
      <div>
        <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
      </div>
      <div className="chart-btn mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-primary btn"
        >
          24hrs
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-primary btn mx-1"
        >
          7days
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-primary btn"
        >
          1year
        </button>
      </div>
    </div>
  );
};

export default HistoryChart;
