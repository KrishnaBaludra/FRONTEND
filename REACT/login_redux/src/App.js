import './App.css';
import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import { CreativeLogin } from './Components/CreativeLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Signup } from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreativeLogin />}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
