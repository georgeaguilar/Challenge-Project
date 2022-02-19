import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:5000/auth/login", {
        email,
        password,
      })
      .then(
        (response) => {
          localStorage.setItem("accessToken", response.data.access_token);
          navigate("/");
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
        <h5 className="card-title text-center">Login</h5>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form onSubmit={login}>
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
            Login
          </button>
          <div className="p-4 mb-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
