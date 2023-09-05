import React, { useState } from "react";
import styles from "./auth.module.css"; // Import as a module
import CustomInput from "../../components/Inputs/CustomInput";
import CustomButton from "../../components/Button/CustomButton";
import LogSvg from '../../assets/images/log.svg'
import RegisterSvg from '../../assets/images/register.svg'
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className={`${styles.container} ${isSignup ? styles["sign-up-mode"] : ""}`}>
      <div className={styles["forms-container"]}>
        <div className={styles["signin-signup"]}>
          <form className={`${styles["sign-in-form"]} ${isSignup ? styles.hide : ""}`}>
          <h1>Signin</h1>
            <CustomInput
              label="Username"
              type="text"
              placeholder="Enter your username"
            />
            <CustomInput
              label="Password"
              type="password"
              placeholder="Enter your Password"
            />
            <CustomButton label="Sign in" />
          </form>
          <form className={`${styles["sign-up-form"]} ${isSignup ? "" : styles.hide}`}>
          <h1>Signup</h1>
            <CustomInput
              label="Username"
              type="text"
              placeholder="Enter your username"
            />
            <CustomInput
              label="Password"
              type="password"
              placeholder="Enter your Password"
            />
            <CustomInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm your Password"
            />
            <CustomButton label="Sign up" />
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
            <button className={`${styles.btn} ${styles.transparent}`} onClick={toggleSignup}>
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
            <button className={`${styles.btn} ${styles.transparent}`} onClick={toggleSignup}>
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
