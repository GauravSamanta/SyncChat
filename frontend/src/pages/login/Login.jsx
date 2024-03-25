import axios from "axios";
import React from "react";
import "./Login.css";
import { useEffect } from "react";
const InputWithLabel = ({ type, id, name, label, required }) => {
  return (
    <div className="inputBox">
      <input type={type} id={id} name={name} required={required} />
      <span>{label}</span>
    </div>
  );
};

const Login = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form>
          <InputWithLabel
            type="text"
            id="username"
            name="username"
            label="username"
            required
          />

          <InputWithLabel
            type="password"
            id="password"
            name="password"
            label="Password"
            required
          />

          <button
            className="submitbutton"
            onClick={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:3000/api/auth/login", {
                  username: document.getElementById("username").value,
                  password: document.getElementById("password").value,
                })
                .then((res) => {
                  console.log(res.data);
                    console.log("Login successful");
                    console.log(res.cookie);
                    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('chat_cookie='))
        ?.split('=')[1];

    console.log(cookieValue);
                    // console.log(res.cookie);
                  
                }).catch((err) => {
                  console.log(err);
                });

              console.log("Login button clicked");
            }}
          >
            Login
          </button>
          <p className="message">
            {/* Already registered? <Link to="/">Login</Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
