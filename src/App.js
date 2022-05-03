import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";

//Components
import Sun from "./components/Sun";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earh from "./components/Earh";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Navegation from "./components/Navegation";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3 text-white">Gallery Universe</h1>
      </div>
      <Routes>
        <Route path="/Sun" children={Sun} />
        <Route path="/Mercury" component={Mercury} />
        <Route path="/Venus" component={Venus} />
        <Route path="/Earth" component={Earh} />
        <Route path="/Mars" component={Mars} />
        <Route path="/Jupiter" component={Jupiter} />
      </Routes>

      <Navegation />
    </Router>
  );
}

export default App;
