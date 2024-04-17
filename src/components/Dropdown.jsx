import React, { useState } from "react";
const validationErrors = {};
function MyForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setErrors({}); // Clear previous errors on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.username) {
      validationErrors.username = "Username is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission if there are no errors
      console.log("Form submitted successfully:", formData);
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <button
        disabled={
          Object.keys(errors).length > 0 ||
          !formData.email ||
          !formData.username
        }
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default MyForm;
