import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white text-dark  mt-3 py-2 border row  ">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className=" font-weight-bold coin-data-category my-2">
                Market Cap
              </span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="font-weight-bold coin-data-category my-2">
                Total Supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className=" font-weight-bold coin-data-category my-2">
                Volume(24H)
              </span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className=" font-weight-bold coin-data-category my-2">
                Price-Change%
              </span>
              <p
                className={
                  data.price_change_percentage_24h < 0
                    ? "col text-danger my-0"
                    : "col text-success my-0"
                }
              >
                {data.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className=" font-weight-bold coin-data-category my-2">
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className=" font-weight-bold coin-data-category my-2">
                Price-Change24hrs
              </span>
              <p
                className={
                  data.price_change_24h < 0
                    ? "col text-danger my-1 "
                    : " col text-success my-1"
                }
              >
                {data.price_change_24h.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
