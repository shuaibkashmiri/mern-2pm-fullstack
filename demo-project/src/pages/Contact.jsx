import React, { useState } from "react";

const Contact = () => {
  const [formdata, setFormData] = useState({
    fullname: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });

    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!formdata.fullname) {
      newErrors.fullname = "Fullname Required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }

    console.log(formdata);

    setFormData({ fullname: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          value={formdata.fullname}
          placeholder="Enter Your FullName"
          onChange={handleChange}
        />
        {errors && <p style={{ color: "red" }}>{errors.fullname}</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
