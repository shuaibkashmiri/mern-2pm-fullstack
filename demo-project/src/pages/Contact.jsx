import React, { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formData = {
    name,
    email,
    message,
  };

  const showformData = () => {
    console.log(formData);
  };

  useEffect(() => {}, []);
  return (
    <div className="main">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={showformData}>Submit</button>
    </div>
  );
};

export default Contact;
