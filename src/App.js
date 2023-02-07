import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { DogHome } from "./component/pages/Doggoimg";

import { Navigation } from "./component/layout/Navigation";
import { Home } from "./component/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getDoggo" element={<DogHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
