import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Super = () => {
  const { message, setMessage } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setMessage("Message Updated")}>Update</button>
      <h2>{message}</h2>
    </div>
  );
};

export default Super;
