import React from "react";
import { Link } from "react-router-dom";

const List = ({ symbol, name, id, image }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4  text-center ">
      <div className="card mb-4 box-shadow bg-light mt-2 mx-auto ">
        <img
          className="mx-auto mt-2 "
          alt={symbol}
          src={image}
          data-holder-rendered="true"
        ></img>
        <div className="card-body">
          <p className="h2 text-dark mt-2">{name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mx-auto my-2">
              <Link
                type="button"
                className="btn btn-md btn-primary  "
                to={`/items/${id}`}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
