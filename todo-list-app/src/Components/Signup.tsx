import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function signup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:5000/users", {
        email,
        password,
      })
      .then(
        () => {
          navigate("/login");
        },
        (error) => {
          setError(error.response.data.message);
        }
      );
  }

  return (
    <div
      className="card 
  position-absolute top-50 start-50 translate-middle p-3 bm-5"
    >
      <div className="card-body">
        <h5 className="card-title text-center">Sign Up</h5>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={signup}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              placeholder="Email address"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <div className="p-4 mb-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
