import React, { useState } from "react";
import "./SignInScreen.css";
import { useRef } from "react";
import { auth } from "../firebase";
import SignUpScreen from "./SignUpScreen";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signUp, setSignUp] = useState(false);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <React.Fragment>
      {signUp ? (
        <SignUpScreen />
      ) : (
        <div className="signUpScreen">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <h4>
              {" "}
              <span className="signUpScreen_gray">New to Netflix?</span>
              <span
                className="signUpScreen_link"
                onClick={() => setSignUp(true)}
              >
                {" "}
                Sign Up now.
              </span>{" "}
            </h4>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default SignInScreen;
