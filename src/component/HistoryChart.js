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
    }
  });

  const renderPrice = () => {
    if (detail) {
      return (
        <>
          <p className="my-0 text-dark">
            Current-Price: ${detail.current_price.toFixed(2)}
          </p>
          <p
            className={
              detail.price_change_24h < 0
                ? "text-danger my-1"
                : "text-success my-1"
            }
          >
            Price-Change24hrs: {detail.price_change_24h.toFixed(2)}
          </p>
          <p
            className={
              detail.price_change_percentage_24h < 0
                ? "text-danger my-0"
                : "text-success my-0"
            }
          >
            Price-Change%: {detail.price_change_percentage_24h.toFixed(2)}%
          </p>
        </>
      );
    }
  };

  return (
    <div className="bg-white border mt-2 rounded p-3 ">
      <div className="">{renderPrice()}</div>
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
