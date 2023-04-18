import Button from "../ui/Button";
// import classes from "./auth.module.css";
import classes from "./auth.module.css";
import registerImage from "../../asset/eshopregister.png";
import Card from "../ui/Card";
import { useState } from "react";
import Loading from "../ui/Loading";
import { Link } from "react-router-dom";
import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase/Config";
import { AiOutlineGoogle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };


const provider = new GoogleAuthProvider();  

const onSignInGoogleHandler = (e) => {
  e.preventDefault()
  signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    toast.success('Login with Google Successfull')
    console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    toast.error(errorMessage)
  });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (
      !enteredEmail ||
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim() === "" ||
      !enteredPassword
    ) {
      toast.error("Please fill in the Inputs");
      setIsLoading(false);
      return;
    }
    //console.log(enteredEmail, enteredPassword);
    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        toast("Log in Successfull");
        setIsLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setIsLoading(false);
      });
  };

  return (
    <section>
      {isLoading && <Loading />}
      <ToastContainer />
      <div className={classes.image}>
        <img src={registerImage} alt="reg-img" />
      </div>

      <Card className={classes.card}>
        <form action="" onSubmit={onSubmitHandler}>
          <div className={classes.title}>
            <h3>Login</h3>
          </div>

          <div className={classes.control}>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={emailChangeHandler}
              value={enteredEmail}
            />
          </div>

          <div className={classes.control}>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={passwordChangeHandler}
              value={enteredPassword}
            />
          </div>

          <div className={classes.action}>
            <Button>Login</Button>
          </div>
          <p>Reset Password</p>
          <p>--or--</p>
          <div className={classes.googleLogin}>
            <Button className={classes.googleLoginButton} onClick={onSignInGoogleHandler} >
              <AiOutlineGoogle style={{ color: "red" }} /> Login with Google
            </Button>
          </div>
        </form>
        <span className={classes.toRegister}>
          <p>Dont have an account?</p>
          <Link to={"/register"}>
            <p>Register</p>
          </Link>
        </span>
        <ToastContainer />
      </Card>
    </section>
  );
};

export default Login;
