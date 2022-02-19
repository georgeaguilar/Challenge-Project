import { Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";
import Tasks from "./Tasks";
import CreateTasks from "./CreateTask";

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
      {/* <Routes>
        <Route path="/" element={<Tasks />}></Route>
        <Route path="/" element={<CreateTasks />}></Route>
      </Routes> */}
    </div>
  );
};

export default Home;
