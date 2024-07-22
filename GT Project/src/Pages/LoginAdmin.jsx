import axios from "axios";
import Form from "../Components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { dbURL } from "../FirebaseConfig/Config";
function LoginAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [adminData, setAdminData] = useState({});

console.log("data admin " , adminData);

  useEffect(() => {
    const fetchData = async () => {
        console.log(user);
      if (user) {
        try {
          console.log("Fetching data for user:", user);
          const response = await axios.get(`${dbURL}/admin.json`);
          const data = response.data;

          if (data) {
            setAdminData(data);
            console.log("User data fetched successfully:", data);
          } else {
            console.log(`No data found for user with ID: ${user}`);
          }
        } catch (error) {
          console.error(`Error fetching data for user with ID: ${user}`, error);
        }
      } else {
        console.log("No user data found in local storage.");
      }
    };

    fetchData();
  }, [user]); 

  const handleLogin = async (e, form) => {
    e.preventDefault();
    setError("");
    try {
      if (adminData.email === form.email && adminData.password === form.password) {
        navigate("/dashboard");
      } else {
        setError("Incorrect email or password.");
        console.log("Cannot access to Dashboard");
      }
    } catch (error) {
      setError("Error logging in.");
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-8 md:px-24 lg:px-24 gap-12 h-screen justify-center content-start py-24">
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
      </div>
      <div className="">
        <img
          src="https://i.pinimg.com/564x/89/d9/8d/89d98d4048d9700df7dda17fdb4c073a.jpg"
          alt="Event"
          className="rounded-lg  invisible lg:visible"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default LoginAdmin;
