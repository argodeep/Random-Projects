import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isStarted, setStart] = useState(false);
  const [timerText, setText] = useState("00:00:00");
  const [stopWatch, setWatch] = useState(null);
  const [recents, setRecent] = useState([]);

  function startTimer() {
    setStart(true);
    setText("00:00:00");
    let hour = 0;
    let min = 0;
    let sec = 0;
    let timer = setInterval(() => {
      if (sec < 59) {
        sec++;
      } else {
        sec = 0;
        if (min < 59) {
          min++;
        } else {
          min = 0;
          hour++;
        }
      }
      setText(
        `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${
          sec < 10 ? "0" + sec : sec
        }`
      );
    }, 1000);
    setWatch(timer);
  }

  function stopTimer() {
    setStart(false);
    clearInterval(stopWatch);
    recents.push(timerText);
    setText("00:00:00");
    setWatch(null);
  }

  return (
    <div className="App">
      <h1>{timerText}</h1>
      {!isStarted && (
        <button type="button" onClick={() => startTimer()}>
          Start
        </button>
      )}
      {isStarted && (
        <button type="button" onClick={() => stopTimer()}>
          Stop
        </button>
      )}
      {recents.map((e, i) => (
        <p key={i}>
          #{i + 1} Time: {e}
        </p>
      ))}
    </div>
  );
}
