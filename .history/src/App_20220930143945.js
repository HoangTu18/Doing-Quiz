import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
