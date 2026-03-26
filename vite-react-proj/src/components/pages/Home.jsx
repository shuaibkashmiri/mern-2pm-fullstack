import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Falki");

  const fullname = () => {
    setName("Falki Sadiq");
  };
  // const decreaseCount = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="main">
      <button onClick={fullname}>Fullname</button>
      <h2>{name}</h2>
      {/* {count > 0 ? <h1 className="red">{count}</h1> : <h1>{count}</h1>} */}
      {/* <button onClick={decreaseCount}>Decrease</button> */}
    </div>
  );
};

export default Home;
