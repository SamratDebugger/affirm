import { Link } from "react-router";

export default function Login() {
  return (
    <section className="min-h-dvh flex items-center justify-center">
      <div className=" bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <form className="fieldset">
          <h1 className="text-center text-4xl">Login</h1>

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
        </form>
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
