import { useState } from "react";
import Header from "./Header";

const Login = () => {
  // State variable to track whether the form is in sign-up mode or not
  const [isSignInForm, setSignInForm] = useState(true); //by default sign in form so if sign in form in true.
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm); // Toggle the value of isSignUp (true becomes false, false becomes true)
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white  rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sing In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-900"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-gray-900"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sing In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sing up Now"
            : "Already registered? Sing In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
