import logo from "./logo.svg";
import "./App.css";
import NavComponent from "./Components/NavComponent";
import CardsDashboard from "./Components/CardsDashboard";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <CardsDashboard />
    </div>
  );
}

export default App;
