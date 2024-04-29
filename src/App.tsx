import "./App.css";
import useSnakeGame from "./hooks/use-snake-game";

function App() {
  const { snake, table } = useSnakeGame({ height: 20, width: 20 });

  return (
    <>
      <div className="table">
        {table.map((row) => {
          return (
            <div className="row">
              {row.map((col) => (
                <div className={`cell ${col === 1 && "snake"}`}></div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
