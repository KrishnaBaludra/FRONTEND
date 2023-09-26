import Company from "./Components/Company";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Company></Company>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
