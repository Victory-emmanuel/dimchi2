import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/pages";
import { Nav } from "./components/components";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
