import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

export default function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Link to="/">
          <button type="button" className="btn btn-success">
            Back to Home
          </button>
        </Link>
        <div className="table-responsive">
          <table className="table table-striped mt-3">
            <thead className="table-dark ">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
