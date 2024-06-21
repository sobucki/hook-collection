import use2048Game from "../../hooks/use-2048-game";
import "./game-style.css";

function App2048() {
  const { board, score } = use2048Game();
  return (
    <>
      <div className="container">
        <h1>2048</h1>
        <div className="header">
          <div className="score-container">
            <span className="score-label">Score:</span>
            <span id="score">0</span>
          </div>
          <button id="new-game">New Game</button>
        </div>
        <div className="game-board">
          {board.map((row) =>
            row.map((col) => <div className="tile">{col}</div>)
          )}
          {/* <div className="tile">2</div>
          <div className="tile">4</div>
          <div className="tile">0</div>
          <div className="tile">0</div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div>
          <div className="tile"></div> */}
        </div>
      </div>
    </>
  );
}

export default App2048;
