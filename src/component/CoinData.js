import React from "react";

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white text-dark mt-3 p-2 rounded border row  ">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="h4 coin-data-category my-2">Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="h4 coin-data-category my-2">Total Supply</span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="h4 coin-data-category my-2">Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="h4 coin-data-category my-2">high 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="h4 coin-data-category my-2">
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="h4 coin-data-category my-2">low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
