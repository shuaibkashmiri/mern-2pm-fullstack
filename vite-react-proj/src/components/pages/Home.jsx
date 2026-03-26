import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="main">
      <button onClick={increaseCount}>Increase</button>
      {count > 0 ? <h1 className="red">{count}</h1> : <h1>{count}</h1>}
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default Home;
