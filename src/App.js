import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/LogIn";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
