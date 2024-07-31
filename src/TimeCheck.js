import React, { Component, useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <div id="clock">
      <h2>Current Time:</h2>
      <p id = "currenttime">{time.toLocaleTimeString()}</p>
    </div>
  );
}

class TimeCheck extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

export default TimeCheck;
