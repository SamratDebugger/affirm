import { Link } from "react-router";
import UserForm from "../components/UserForm";
import AdjustedSection from "../components/ui/AdjustedSection";

export default function Login() {
  return (
    <AdjustedSection>
      <div className=" bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <UserForm title="Login" />
        <p>
          Don't have an account?{" "}
          <Link className="link link-success" to="/registration">
            Register Now
          </Link>
        </p>
      </div>
    </AdjustedSection>
  );
}
