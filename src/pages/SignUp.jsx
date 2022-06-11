import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
import { ReactComponent as ArrowRighticon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";

// React Component allows top transform an svg file and turn into a usable
// component.

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // destructure from the formData state to use email and password
  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,

      //  below changes the value based on the id  = either email or password
      // updates in the inspect > (component state)
      // now we can add another field in the state if we want
      // as long as we set the id (ininput) to the same as the field
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // getting auth value with getAuth
      const auth = getAuth();

      // registering the user with this function
      // which returns a promise
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // get user info from here..
      const user = userCredential.user;

      // update the display name
      updateProfile(auth.currentUser, {
        displayName: name,
      });

      // copy everything thats in our formdata state(name, email ,password)
      const formDataCopy = { ...formData };
      // delete the password because we dont want that put in the database
      delete formDataCopy.password;
      // set the timestamp to the server timestamp
      formDataCopy.timestamp = serverTimestamp();

      // setdoc is actually what updates the database and add user
      await setDoc(doc(db, "users", user.uid), formDataCopy);

      // then redirecting
      navigate("/");
    } catch (error) {
      toast.error("Someting went wrong with registration ");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>

        {/* when putting in curly braces means its conditional */}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            // id needs toi be the same as whats in the state
            id="name"
            value={name}
            className="nameInput"
            onChange={onChange}
          />

          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            className="emailInput"
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              // set the onclick to a function that calls setShowPassword and then pass in a function which
              // takes in a previous state then set that to the opposite of prev state if false set to true if true set to false
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgotPassword" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRighticon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        <OAuth />
        <Link to="/sign-in" className="registerLink">
          Sign In Here
        </Link>
      </div>
    </>
  );
}

export default SignUp;

// showPasswword if thats true (?) then we want this to be a text input else we want it to be a password

/* <input type={showPassword ? } /> */
