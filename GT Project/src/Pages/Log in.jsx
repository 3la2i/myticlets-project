import login from "../images/login2.png";
import React, { useState } from "react";
import {
  auth,
  dbURL,
  loginFirebase,
  GoogleAuthProvider,
  signInWithPopup,
} from "./../FirebaseConfig/Config.jsx";
import axios from "axios";
import Form from "../Components/Form/Form";
import { GoogleBtn } from "../Components/Buttons/VerButton";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e, form) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await loginFirebase(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      localStorage.setItem("user", JSON.stringify(user.uid));
      navigate("/");
    } catch (error) {
      setError("Incorrect email or password.");
      console.error("Error logging in:", error.message);
    }
  };

  // login by google
  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const user = result.user;
      console.log("users this ", user);
      const userData = {
        name: user.displayName || "",
        email: user.email || "",
        id: user.uid,
      };

      await axios.put(`${dbURL}/users/${user.uid}.json`, userData);
      localStorage.setItem("user", JSON.stringify(user.uid));

      navigate("/");
    } catch (error) {
      setError(error.message);
      console.error("Error signing in with Google:", error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-8 md:px-24 lg:px-44 gap-12  justify-center content-start py-24">
      <div className="bg-second-dark bg-gradient-prim p-4 md:p-16 rounded-xl">
        <div className="flex flex-col gap-6">
          <Form
            title={"Login"}
            formArr={[
              {
                label: "Email",
                name: "email",
                type: "text",
                onChange: (e) => setEmail(e.target.value),
              },
              {
                label: "Password",
                name: "password",
                type: "password",
                onChange: (e) => setPassword(e.target.value),
              },
            ]}
            subitBtn={"Login"}
            onSubmit={handleLogin}
            withEvent={true}
            redirect={{
              label: "Don't have an account?",
              link: {
                label: "Register",
                to: "/signup",
              },
            }}
          />
          {error && <div className="text-red-500">{error}</div>}
          <GoogleBtn onClick={handleGoogleLogin} className="google-btn">
            Sign Up with Google
          </GoogleBtn>
        </div>
      </div>
      <div className="">
        <img
          src={login}
          alt="Event"
          className="rounded-lg  invisible lg:visible"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default Login;
