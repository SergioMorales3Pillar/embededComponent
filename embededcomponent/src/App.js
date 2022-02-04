import logo from "./logo.svg";
import "./App.css";

import AccordionTest from "./components/AccordionTest/AccordionTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AccordionTest />
    </div>
  );
}

export default App;
