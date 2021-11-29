import React, { useState } from "react";
import { user } from "../Data/Data";
import { useNavigate } from "react-router-dom";

let Login = () => {
  const [data, setData] = useState(user);
  const [val, setVal] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState(false);
  const [validation, setValidation] = useState(false);
  let navigate = useNavigate();
  const handleClick = () => {
    if (!val.email || !val.password) {
      setValidation(true);
      setTimeout(() => {
        setValidation(false);
      }, 2000);
    } else if (data.email === val.email && data.password === val.password) {
      navigate("/home");
    } else {
      console.log("DATA Not matched");
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 2000);
    }
  };

  return (
    <>
      <hr />
      <div className="login__main__container">
        <div className="login__container">
          <br />
          <br />
          <h2>LogIn</h2>
          <br />
          {err ? (
            <>
              <h6 style={{ color: "red" }}>
                LogIn Failed <br />
                <b>Error</b> Eamail or Password Not Matched
              </h6>
            </>
          ) : null}

          {validation ? (
            <>
              <h6 style={{ color: "red" }}>
                Validation Error <br />
                <b>Error</b> Please Fill Required Input
              </h6>
            </>
          ) : null}

          <input
            type="email"
            placeholder="Enter Your Email"
            value={val.email}
            onChange={(e) => setVal({ ...val, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={val.password}
            onChange={(e) => setVal({ ...val, password: e.target.value })}
          />
          <button onClick={handleClick}>LogIn</button>
        </div>
      </div>
    </>
  );
};

export default Login;
