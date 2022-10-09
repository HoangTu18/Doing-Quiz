import Header from "./components/Header/Header";
import { Outlet, Link } from "react-router-dom";
import "./App.scss";
const App = () => {
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
