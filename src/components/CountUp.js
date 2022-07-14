import React, { useState } from "react";

function CountUp() {
  const [count, setCount] = useState(0);

  function addCount() {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }
  addCount();
//TODO : WHY DOES THE COUNTER GOES NUTS AFTER SOMETIME
//      : FIND A WAY TO STOP THE COUNT AT 100
  return (
    <div>
      <center>
        <h4 className="time-text">{count}</h4>
      </center>
    </div>
  );
}

export default CountUp;
