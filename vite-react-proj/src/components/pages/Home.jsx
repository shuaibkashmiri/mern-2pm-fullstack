import React, { useState } from "react";
import Imagecard from "../sharedCompnents/Imagecard";

const Home = () => {
  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Senior Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1500648767793-00020114a33e?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Aisha Khan",
      role: "UX Researcher",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Liam O'Connor",
      role: "DevOps Engineer",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c1786d4b?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <div className="main">
      {/* {users.map((user) => (

      ))} */}
      <div className="box">
        {users.map((user) => (
          <Imagecard name={user.name} image={user.image} role={user.role} />
        ))}
      </div>
    </div>
  );
};

export default Home;
