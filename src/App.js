import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/actions/userAction";
import ProfileScreen from "./Screens/ProfileScreen";
import SignInScreen from "./Screens/SignInScreen";
import SignUpScreen from "./Screens/SignUpScreen";

function App() {
  const user = useSelector((state) => state.userDetails.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(login(userAuth));
      } else {
        //Logged Out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/home" component={HomeScreen} />
            <Route path="/" exact component={ProfileScreen} />
            <Route path="/signin" exact component={SignInScreen} />
            <Route path="/signup" exact component={SignUpScreen} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
