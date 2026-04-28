import React, { useEffect } from "react";
import BlogForm from "../components/sharedComponents/BlogForm";
import axios from "axios";

const Home = () => {
  const fetchBlogs = async () => {
    try {
      const resp = await axios.get("http://localhost:5000/api/v1/blog/all");
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <BlogForm />
    </>
  );
};

export default Home;
