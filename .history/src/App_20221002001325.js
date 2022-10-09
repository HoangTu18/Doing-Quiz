import "./App.scss";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        test link
        <div>
          <button>go to user page</button>
          <button>goto admin page</button>
        </div>
      </div>
    </div>
  );
};

export default App;
