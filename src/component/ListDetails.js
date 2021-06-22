import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HistoryChart from "./HistoryChart";
import coinGecko from "../api/coinGecko";
import MoonLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import CoinData from "./CoinData";

const ListDetails = ({ match }) => {
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${match.params.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${match.params.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${match.params.id}/market_chart/`, {
          params: {
            vs_currency: "usd",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: match.params.id,
          },
        }),
      ]);
      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, [match.params.id]);

  if (isLoading) {
    return (
      <div className="loader">
        <MoonLoader
          color="blue"
          css={override}
          loading={isLoading}
          size={150}
        />
      </div>
    );
  }

  return (
    <div className="container">
      <Link type="button" className="btn btn-primary btn-lg" to={`/`}>
        Back
      </Link>
      <HistoryChart data={coinData} />
      <CoinData data={coinData.detail} />
    </div>
  );
};

export default ListDetails;
