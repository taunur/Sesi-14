import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* content */}
      <div className="p-5 mt-4 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <Link to="/users">
            <button className="btn btn-primary btn-lg" type="button">
              User List
            </button>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
