import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  const hasAccessToken = Boolean(localStorage.getItem("accessToken"));

  if (!hasAccessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Home;
