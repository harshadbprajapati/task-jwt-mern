import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={
          <>
            <Outlet />
          </>}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
