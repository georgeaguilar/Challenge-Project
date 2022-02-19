import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="">
            <ul className="navbar-nav list-group-horizontal">
              <li className="nav-item p-3">
                <Link to="/new" className="nav-link active">
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
    </div>
  );
};

export default Navbar;
