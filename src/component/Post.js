import React from "react";
import { Link } from "react-router-dom";

const Posts = ({post, endpoint}) => {
  const { user_id, id, title, body } = post;
  return (
    
      <div className="col-md-12 mb-2">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-fluid rounded"
                  src="http://placehold.it/750x300"
                  alt=""
                />
              </div>
              <div className="col-md-6 text-left">
                <h3 className="mr-auto">{title.slice(0, 10)}</h3>
                <p className="lead card-text text-justify mr-auto">{body.length < 100 ?body:body.slice(0, 100)}</p>
                <Link
                  className="btn btn-primary text-decoration-none mr-auto"
                  to={`${endpoint}${id}`}
                  role="button"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <p className="lead">Posted On Jan 4, 2017 by Star Bootstrap</p>
          </div>
        </div>
      </div>
  );
};

export default Posts;
