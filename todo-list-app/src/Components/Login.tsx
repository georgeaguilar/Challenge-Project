const Login: React.FC = () => {
  return (
    <div
      className="card 
  position-absolute top-50 start-50 translate-middle p-3 bm-5"
    >
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="text" className="form-control" />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
