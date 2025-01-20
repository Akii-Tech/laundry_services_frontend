//import React from "react";
import React, { useState } from "react";
import "../assets/RegistrationForm.css"
import LoginService from "../services/LoginService";


const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const userDetails = {
                firstName: formData.fname,
                lastName: formData.lname,
                userName: formData.username,
                email: formData.email,
                password: formData.password,
                role: formData.userType,
              };
            // Just print the form data to the console
            console.log(formData);
            const result = await LoginService.register(userDetails);
            console.log(result)
            if (result) {
                alert("Registration successful!");
                window.location.href = '/login'; // Redirect to login page
              } else {
                //alert("Registration failed. Please try again.");
              }
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
            
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="Last Name" />
          <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" />
          <select name="userType" value={formData.userType} onChange={handleChange} >
            <option value="user">User</option>
            <option value="laundryOwner">Laundry Owner</option>
          </select>
          <button type="submit">Register</button>
        </form>
      );    

}

export default RegistrationForm;
