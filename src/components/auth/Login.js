import React from "react";
import classes from "./Login.module.css";

import { Link } from "react-router-dom";

import useInput from "../../hooks/use-input";
const Login = () => {
  // const submitUserHandler = (userdata) => {
  //   fetch("https://yum-meals-site-default-rtdb.firebaseio.com/user.json", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       user: userdata,
  //     }),
  //   });
  // };

  const {
    value: enteredMail,
    isValid: emailIsValid,
    hasEror: emailHasEror,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    // reset: emailReset,
  } = useInput((value) => value.trim().includes("@"));
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasEror: passwordHasEror,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    // reset: passwordReset,
  } = useInput((value) => value.trim().length > 8);

  let btnIsValid = emailIsValid && passwordIsValid;
  return (
    <div className={classes.login}>
      <div className={classes["login-form"]}>
        <form onSubmit={() => console.log("submit")}>
          <div className={classes["form-div"]}>
            <h1 className={classes["form-heading"]}>
              Sign <span>in</span>{" "}
            </h1>

            <div className={classes["form-input"]}>
              <div className={classes["signup-req"]}>
                <p>Not registered yet ?</p> <Link to="/signup"> Sign-up</Link>
              </div>
              <div className={classes["input-cedentials"]}>
                <input
                  type="email"
                  placeholder="email"
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  value={enteredMail}
                  style={{
                    background: `${emailHasEror ? "#f9878842" : "transparent"}`,
                  }}
                />
                {emailHasEror && (
                  <p className={classes["eror-text"]}>
                    email must include <strong>@</strong>{" "}
                  </p>
                )}
                <input
                  type="password"
                  placeholder="password"
                  onChange={passwordChangeHandler}
                  onBlur={passwordBlurHandler}
                  value={enteredPassword}
                  style={{
                    background: `${
                      passwordHasEror ? "#f9878842" : "transparent"
                    }`,
                  }}
                />

                {passwordHasEror && (
                  <p className={classes["eror-text"]}>
                    password must be of atleast <strong>8 </strong>characters{" "}
                  </p>
                )}
              </div>
              {/* <div className={classes["input-dropdown"]}>
                <label htmlFor="">
                  <span>Login as</span>
                  <select name="year" id="year-select">
                    <option value="">Select</option>
                    <option value="student">student</option>
                    <option value="admin">admin</option>
                  </select>
                </label>
              </div> */}

              <div className={classes["form-submit"]}>
                <Link to="/">
                  <button disabled={!btnIsValid}>Log-in</button>
                </Link>
              </div>

              <div className={classes["forgot-password"]}>
                <p>Forgot your password ?</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
