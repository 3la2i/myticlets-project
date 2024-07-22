import axios from "axios";
import Form from "../Components/Form/Form";
import { useState, useEffect } from "react";
import { dbURL } from "../FirebaseConfig/Config";
import Swal from "sweetalert2";
function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMsg] = useState("");
  const [dataUser, setUser] = useState({});

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("User data from localStorage:", dataUser);

  useEffect(() => {
    const fetchData = async () => {
      if (userData) {
        try {
          console.log("Fetching data for user:", userData);
          const response = await axios.get(`${dbURL}/users/${userData}.json`);
          const data = response.data;

          if (data) {
            setUser(data);
            console.log("User data fetched successfully:", data);
          } else {
            console.log(`No data found for user with ID: ${userData}`);
          }
        } catch (error) {
          console.error(`Error fetching data for user with ID: ${userData}`, error);
        }
      } else {
        console.log("No user data found in local storage.");
      }
    };

    fetchData();
  }, [dbURL, userData]);

  const handleSending = async (event, form, resetForm) => {
    event.preventDefault();

    if (userData && dataUser) {
      const messageData = {
        userName: form.name,
        userEmail: form.email,
        userMsg: form.msg,
      };

      try {
        if (dataUser.email === form.email) {
          await axios.post(`${dbURL}/messages.json`, messageData);
          console.log("Message sent successfully:", messageData);
          resetForm();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email does not match.",
          });
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      console.log("User data not available or no data found in local storage.");
    }
  };

  return (
    <div className="my-24 mx-8 md:mx-24 lg:mx-96 flex flex-col gap-6">
      <div className="text-center  flex flex-col gap-3">
        <p className="text-text-prim font-bold text-4xl">Lets Talk</p>
        <p className="text-text-second text-xl">
          Speak to an authentication expert to learn more about our platform,
          reach out to support team if you're customer.{" "}
        </p>
      </div>
      <div className="bg-second-dark bg-gradient-prim p-4 md:p-16 rounded-xl">
        <Form
          // title={"Contact Us"}
          formArr={[
            {
              label: "Your Name",
              name: "name",
              type: "text",
              value: name,
              onChange: (e) => setName(e.target.value),
            },
            {
              label: "Email",
              name: "email",
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
            },
            {
              label: "Your Message",
              name: "msg",
              type: "text",
              value: message,
              onChange: (e) => setMsg(e.target.value),
            },
          ]}
          subitBtn={"Send your message"}
          onSubmit={(event, form, resetForm) =>
            handleSending(event, form, resetForm)
          }
          withEvent={true}
        />
      </div>
    </div>
  );
}

export default ContactUs;
