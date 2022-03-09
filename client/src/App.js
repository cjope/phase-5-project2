import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((u) => console.log(u));
  });

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
