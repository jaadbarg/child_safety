import "./App.css";
import "./Jaad";
import Jaad from "./Jaad";
import HelloWorldComponent from "./component/HelloWorld";

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
