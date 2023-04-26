import Random from "./components/Random";
import Tag from "./components/Tag";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Random">
        {" "}
        <h1>RANDOM GIFS</h1>
        <div className="random">
          <Random />
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default App;
