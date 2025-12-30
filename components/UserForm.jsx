import { LuKey, LuMail } from "react-icons/lu";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.js";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useState } from "react";

export default function UserForm({ title }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    if (title === "Registration") {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed up
          toast.success("Registration Successful");
          setIsLoading(false);
          const user = userCredential.user;
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.error("Registration Failed!");
          setIsLoading(false);
        });
    }

    if (title === "Login") {
      signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in
          toast.success("Successfully Logged in");
          setIsLoading(false);
          navigate("/dashboard");
          const user = userCredential.user;
        })
        .catch((error) => {
          toast.error("Wrong User Credential!");
          setIsLoading(false);
        });
    }
  };

  return (
    <form className="fieldset" onSubmit={handleForm}>
      <h1 className="text-center text-4xl">{title}</h1>

      <label className="label">Email</label>
      <label className="input">
        <LuMail className="opacity-50" />
        <input type="email" placeholder="mail@site.com" name="email" required />
      </label>

      <label className="label">Password</label>
      <label className="input">
        <LuKey className="opacity-50" />
        <input
          type="password"
          name="pass"
          required
          placeholder="Password"
          minLength="6"
          title="Must be more than 6 characters"
        />
      </label>

      <button disabled={isLoading} className="btn btn-success mt-4">
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            loading
          </>
        ) : (
          title
        )}
      </button>
    </form>
  );
}
