import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleClick() {
    console.log(form);
  }
  return (
    <div className="main">
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="email" onChange={handleChange} />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default Contact;
