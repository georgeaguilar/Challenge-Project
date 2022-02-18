import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="">
          <ul className="navbar-nav list-group-horizontal">
            <li className="nav-item p-3">
              <Link to="/login" className="nav-link active">
                Create Task
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link to="/signup" className="nav-link active">
                List of Tasks
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <button className="btn btn-primary" type="submit">
            Log out
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
