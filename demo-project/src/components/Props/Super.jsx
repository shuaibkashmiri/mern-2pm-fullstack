import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Super = () => {
  const { message } = useContext(AppContext);
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Super;
