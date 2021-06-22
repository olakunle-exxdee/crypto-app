import React, { useState, useEffect } from "react";
import List from "./List";
import MoonLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const ItemBitcoin = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;
  const fetchBitcoin = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchBitcoin();
    return () => {
      setData([]);
    };
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterCoins = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
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
    <>
      <form className="form my-4">
        <div className="form-group w-50 mx-auto  form-sm">
          <input
            className="form-control "
            type="text"
            placeholder="Search"
            aria-label="default input example"
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="container">
        <div className="row">
          {filterCoins.map((coin) => {
            return <List key={coin.id} {...coin} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ItemBitcoin;
