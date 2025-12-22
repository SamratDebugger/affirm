import { Link } from "react-router";
import UserForm from "../components/UserForm";

export default function Login() {
  return (
    <section className="min-h-[calc(100dvh-65px)] flex items-center justify-center">
      <div className=" bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <UserForm title="Login" />
        <p>
          Don't have an account?{" "}
          <Link className="link link-success" to="/registration">
            Register Now
          </Link>
        </p>
      </div>
    </section>
  );
}
