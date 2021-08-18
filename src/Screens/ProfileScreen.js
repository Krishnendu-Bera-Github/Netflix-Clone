import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import Navbar from "../Navbar";
import PlanScreen from "./PlanScreen";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector((state) => state.userDetails.user);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen_Details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <PlanScreen title="Premium" resolution="4K + HDR" />
              <PlanScreen title="Standard" resolution="1080p" />
              <PlanScreen title="Basic" resolution="480p" />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
