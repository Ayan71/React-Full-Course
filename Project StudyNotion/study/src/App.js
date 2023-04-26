import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Nabar";
import Login from "./pages/Login";
import Dash from "./pages/Dash";
import Sign from "./pages/Sign";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Sign />}></Route>
        <Route path="/Dash" element={<Dash />}></Route>
      </Routes>
    </div>
  );
}

export default App;
