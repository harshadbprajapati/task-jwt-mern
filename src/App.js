import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Sign_up from "./Sign_up";

import After_login from "./After_login";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={
          <>
            <Outlet />
          </>}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign_up />} />
          <Route path="/After_login" element={<After_login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
