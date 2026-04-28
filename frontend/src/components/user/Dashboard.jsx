import React from "react";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const myBlogs = async () => {
    const token = localStorage.getItem("token");
    try {
      const resp = await axios.get("http://localhost:5000/api/v1/blog/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myBlogs();
  }, []);
  return <div>User Dashboard</div>;
};

export default Dashboard;
