import Header from "./components/Header/Header";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch;
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
