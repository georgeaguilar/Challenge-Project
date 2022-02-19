import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./Components/CreateTask";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Tasks from "./Components/Tasks";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Tasks />} />
          <Route path="new" element={<CreateTask />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
