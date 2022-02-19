import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Tasks from "./Tasks";

const Home: React.FC = () => {
  const hasAccessToken = Boolean(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!hasAccessToken) {
      return;
    }
  }, [hasAccessToken]);

  function logout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  if (!hasAccessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar logout={logout} />
      <Tasks />
    </div>
  );
};

export default Home;
