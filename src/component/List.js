import React from "react";
import { Link } from "react-router-dom";

const List = ({ symbol, name, id, image }) => {
  return (
    <div className="col-md-4 text-center mt-1">
      <div className="card mb-4 box-shadow bg-light mt-2 outline-danger">
        <img
          className=" w-25  img-fluid  mx-auto "
          alt={symbol}
          src={image}
          data-holder-rendered="true"
        ></img>
        <div className="card-body">
          <p className="h1 text-dark">{name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group mx-auto my-2">
              <Link
                type="button"
                className="btn btn-lg btn-outline-primary "
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
