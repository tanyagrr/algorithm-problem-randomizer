import { useState } from "react";
import { problems } from "./problems";
import "./App.css";

function App() {
  const [current, setCurrent] = useState(null);
  const [lastId, setLastId] = useState(null);

  function getRandomProblem() {
    const pool = problems.filter((p) => p.id !== lastId);
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setCurrent(pick);
    setLastId(pick.id);
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Algorithm Problem Randomizer</h1>
        <button className="roll-btn" onClick={getRandomProblem}>
          {current ? "Next Problem" : "Get Problem"}
        </button>
      </div>

      {current && (
        <div className="card">
          <div className="card-header">
            <span className="problem-number">#{current.id}</span>
            <h2 className="problem-title">{current.title}</h2>
          </div>

          <div className="section">
            <span className="label">Implement</span>
            <pre className="code">{current.signature}</pre>
          </div>

          <div className="section">
            <span className="label">Input</span>
            <pre className="code">{current.input}</pre>
          </div>

          <div className="section">
            <span className="label">Output</span>
            <pre className="code">{current.output}</pre>
          </div>

          <div className="section">
            <span className="label">Tests</span>
            <ul className="tests-list">
              {current.tests.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
