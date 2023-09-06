import React, { useState } from "react";
import styles from "./auth.module.css"; // Import as a module
import LogSvg from "../../assets/images/log.svg";
import RegisterSvg from "../../assets/images/register.svg";
import Signup from "./../Signup/signup";
import SignIn from "./../Login/login";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div
      className={`${styles.container} ${
        isSignup ? styles["sign-up-mode"] : ""
      }`}
    >
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          <form
            className={`${styles["sign-in-form"]} ${
              isSignup ? styles.hide : ""
            }`}
          >
            <SignIn />
          </form>
          <form
            className={`${styles["sign-up-form"]} ${
              isSignup ? "" : styles.hide
            }`}
          >
            <Signup />
          </form>
        </div>
      </div>
      <div className={styles["panels-container"]}>
        <div className={`${styles.panel} ${styles["left-panel"]}`}>
          <div className={styles.content}>
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              onClick={toggleSignup}
            >
              Sign up
            </button>
          </div>
          <img src={LogSvg} className={styles.image} alt="" />
        </div>
        <div className={`${styles.panel} ${styles["right-panel"]}`}>
          <div className={styles.content}>
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className={`${styles.btn} ${styles.transparent}`}
              onClick={toggleSignup}
            >
              Sign in
            </button>
          </div>
          <img src={RegisterSvg} className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
