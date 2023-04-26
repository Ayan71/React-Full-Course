import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./componet/NotFound";
import About from "./componet/About";
import Support from "./componet/Support";
import Home from "./componet/Home";
import Labs from "./componet/Labs";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="supp">Support</Link>
          </li>
          <li>
            <Link to="/labs">Labs</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/supp" element={<Support />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/labs" element={<Labs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
