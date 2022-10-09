import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <div className="header-container"></div>
      <Header />
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
