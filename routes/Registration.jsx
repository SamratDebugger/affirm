import { Link } from "react-router";
import UserForm from "../components/UserForm";

export default function Registration() {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className=" bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <UserForm title="Registration" />
        <p>
          Already have an account?{" "}
          <Link className="link link-success" to="/login">
            Login Now
          </Link>
        </p>
      </div>
    </section>
  );
}
