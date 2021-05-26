import "./App.css";
import Timer from "./Timer";
import TimerClass from "./TimerClass";

function App({ initial = 100 }) {
  return (
    <div className="App" data-testid="app">
      <Timer {...{ initial }} />
    </div>
  );
}

export default App;
