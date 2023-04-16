import classes from "./auth.module.css";
import registerImage from "../../asset/eshopregister.png";
import Card from "../ui/Card";
import { useRef, useState } from "react";
import ErrorModal from "../ui/ErrorModal";
import Button from "../ui/Button";
import Loading from '../ui/Loading';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const conPasswordInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConPassword = conPasswordInputRef.current.value;

    if (enteredPassword !== enteredConPassword) {
      setErrorInfo("Passwwords Don't Match");
      return;
    }
    if (
      !enteredEmail ||
      enteredEmail.trim().length === 0 ||
      !enteredEmail.includes("@") ||
      !enteredPassword ||
      enteredPassword.trim().length === 0 ||
      !enteredConPassword ||
      enteredConPassword.trim() === ""
    ) {
      setErrorInfo("Invalid Inputs,Check your Inputs");
      return;
    }
    console.log({ enteredEmail, enteredPassword, enteredConPassword });
    setIsLoading(false);
  };

  return (
    <div>
        {isLoading && <Loading />}
      <Card>
        <form action="" onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <input type="email" placeholder="Enter Email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              placeholder="Enter Password"
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.control}>
            <input
              type="password"
              placeholder="Confirm Password"
              ref={conPasswordInputRef}
            />
          </div>
          <div className={classes.action}>
            <Button>Register</Button>
          </div>
        </form>
        {errorInfo && <ErrorModal error={errorInfo} />}
      </Card>

      <div className={classes.image}>
        <img src={registerImage} alt="reg-img" />
      </div>
    </div>
  );
};

export default Register;
