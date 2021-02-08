import "./App.css";
import "./Jaad";
import Jaad from "./Jaad";
import HelloWorldComponent from "./components/HelloWorld";
import Evan from"./Evan";

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
