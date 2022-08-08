import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <div>
          <a href="#" className="hello-button btn btn-primary">
            Hello
          </a>
        </div>
      </header>
    </div>
  );
}
export default App;
