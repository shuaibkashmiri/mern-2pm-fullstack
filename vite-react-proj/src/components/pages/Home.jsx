import React, { useEffect, useState } from "react";
import Imagecard from "../sharedCompnents/Imagecard";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // console.log(getData());
  }, []);

  return (
    <div className="main">
      {/* {users.map((user) => (

      ))} */}
      <div className="box">
        {/* {users.map((user) => (
          <Imagecard name={user.name} image={user.image} role={user.role} />
        ))} */}
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
