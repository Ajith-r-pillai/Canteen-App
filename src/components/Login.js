import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  let navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [store_id, setstore_id] = useState(10);
  const [result, setresult] = useState();

  const userLogin = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
      store_id,
    };
    try {
      const result = await axios.post(
        "https://api.denzo.io/api/cus/v1/login",
        body,
        { headers: { 'Accept':'application/json'} }
      );
      setresult(result.data.token)
      alert(result.data.message);
      localStorage.setItem("currentid",JSON.stringify(result.data.user.id))
      localStorage.setItem("currentuser",JSON.stringify(result.data.user.name))
      localStorage.setItem("token",JSON.stringify(result.data.token))
    
      navigate('home')
    } catch (error) {
      alert(error.response.data.message);

      //   console.log(error.response.data.message);
    }
    
    console.log(result);
  };
  return (
    <div className="login-main">
      <div className="login-header">
        <p>Welcome</p>
      </div>
      <div className="login-form-main">
        <div className="login-form">
          <p>Email Address</p>
          <input onChange={(e) => setusername(e.target.value)} />

          <p style={{ marginTop: "1rem" }}>Password</p>
          <input
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
          <div className="login-btn">
            <button onClick={(e) => userLogin(e)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
