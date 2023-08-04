import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => setUsers(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Pass an empty dependency array to run the effect only once on mount.

  return (
    <div className="container py-4">
      <Link to="/">
        <button type="button" className="btn btn-success">
          Back to Home
        </button>
      </Link>
      <div className="table-responsive">
        <table className="table table-striped mt-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
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
  );
}
