import { useEffect, useState } from "react";

function Timer({ initial }) {
  const [rem, setRem] = useState(initial);
  const [stop, setStop] = useState(false);

  console.log({ initial, rem });

  const tick = () => {
    setRem(Number(rem) - 1);
  };
  useEffect(() => {
    const id = setInterval(tick, 1000);
    if (stop) clearTimeout(id);
    return () => clearInterval(id);
  }, [stop, tick]);
  return (
    <div data-testid="timer">
      <p>Timer</p>
      <div data-testid="remaining-time">{rem}</div>
      <button data-testid="end-time" onClick={() => setStop(true)}>
        End Timer
      </button>
    </div>
  );
}

export default Timer;
