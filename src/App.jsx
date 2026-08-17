import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Plant Shop</h1>
      <p>Welcome to the Plant Shop.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;