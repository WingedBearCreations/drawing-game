import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home'
import Game from './components/Game/Game'

function App() {
  return (
    < div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>
    </ div>
  );
}

export default App;
