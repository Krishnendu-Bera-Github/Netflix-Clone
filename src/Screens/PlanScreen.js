import React, { useState } from "react";
import "./PlanScreen.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

const PlanScreen = ({ title, resolution }) => {
  const [isActive, setIsActive] = useState(false);

  const history = useHistory();

  const subscribeSuccessfully = () => {
    setIsActive(true);
    toast.success("Subscription Added Successfully", {
      position: "top-center",
    });

    setTimeout(() => {
      history.push("/home");
    }, 1500);
  };

  return (
    <div>
      <div className="planScreen">
        <h2>{title}</h2>
        <button
          onClick={() => subscribeSuccessfully()}
          className={isActive ? "subscriptionAdded" : "subscription"}
        >
          Subscribe
        </button>
      </div>
      <p>{resolution}</p>
      <ToastContainer />
    </div>
  );
};

export default PlanScreen;
