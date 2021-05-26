import "./App.css";
import Timer from "./Timer";
import TimerClass from "./TimerClass";

function App({ initial = 100 }) {
  return (
    <div className="App" data-testid="app">
      <TimerClass {...{ initial }} />
    </div>
  );
}

export default App;
