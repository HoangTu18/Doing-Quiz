import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-container"></div>
      </div>

      <div>
        test link
        <div>
          <button>
            <Link to="/users">go to users page</Link>
          </button>
          <button>
            <Link to="/admins"> go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
