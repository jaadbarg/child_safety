import "./App.css";
import "./components/Jaad";
import Jaad from "./components/Jaad";
import HelloWorldComponent from "./components/Muyan";
import Evan from "./components/Evan";

function App() {
  return (
    <div className="App">
      <h1>Child Safety!</h1>
      <Jaad></Jaad>
      <HelloWorldComponent></HelloWorldComponent>
      <Evan></Evan>
    </div>
  );
}

export default App;
