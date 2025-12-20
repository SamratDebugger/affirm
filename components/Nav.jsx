import { Link } from "react-router";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <header className="bg-base-100">
      <div className="navbar max-w-1xl mx-auto ">
        <div className="navbar-start">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to="/">
            <img className="max-w-40" src="/assets/logo.webp" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItem />
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
