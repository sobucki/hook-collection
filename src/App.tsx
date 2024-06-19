import "./App.css";
import useSnakeGame from "./hooks/use-snake-game";

function App() {
  const { snake, table, size, growSnake } = useSnakeGame({
    height: 30,
    width: 30,
  });

  return (
    <>
      {size}
      <button onClick={() => growSnake()}>Grow</button>
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
