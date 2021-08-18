import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import { useState } from "react";
import SignInScreen from "./SignInScreen";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signIn, setSignIn] = useState(false);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <React.Fragment>
      {signIn ? (
        <SignInScreen />
      ) : (
        <div className="signUpScreen">
          <form>
            <h1>Sign Up</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={register}>
              Sign Up
            </button>
            <h4>
              {" "}
              <span className="signInScreen_gray">
                Already have an account?
              </span>
              <span
                className="signInScreen_link"
                onClick={() => setSignIn(true)}
              >
                {" "}
                Sign In
              </span>{" "}
            </h4>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignUpScreen;
