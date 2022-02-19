import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ logout }) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="">
          <ul className="navbar-nav list-group-horizontal">
            <li className="nav-item p-3">
              <Link to="/" className="nav-link active">
                Create Task
              </Link>
            </li>
            <li className="nav-item p-3">
              <Link to="/" className="nav-link active">
                List of Tasks
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex" onSubmit={logout}>
          <button className="btn btn-primary" type="submit">
            Log out
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
