
import "./App.css";
import { Login } from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { RegLogin } from "./Components/RegLogin";

function App() {
  return (
    <div className="App">
      <Login></Login>
      <RegLogin></RegLogin>
    </div>
  );
}

export default App;
