import { Link, useNavigate } from "react-router";
import UserForm from "../components/UserForm";
import AdjustedSection from "../components/ui/AdjustedSection";
import { useContext, useEffect } from "react";
import { AffirmContext } from "../context/MyContext";

export default function Login() {
  const { user } = useContext(AffirmContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  return (
    <AdjustedSection>
      <div className=" bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <UserForm title="Login" />
        <p>
          Don't have an account?
          <Link className="link link-success" to="/registration">
            Register Now
          </Link>
        </p>
      </div>
    </AdjustedSection>
  );
}
