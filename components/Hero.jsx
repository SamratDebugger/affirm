import { FaCirclePlay } from "react-icons/fa6";
import Subtitle from "./Subtitle";
import Features from "./Features";
import { Link } from "react-router";

export default function Hero() {
  return (
    <div className="grid max-w-1xl mx-auto md:grid-cols-2 items-center p-5 pb-0 bg-base-100 max-md:gap-10 ">
      <div>
        <Subtitle text="Build Your Plan" />
        <h1 className="text-3xl xs:text-5xl lg:text-7xl font-bold">
          Everything you need to run your online business
        </h1>
        <p className="py-6">
          Get education on business planning, direct access to planning experts
          and a funding platform that&apos;s helped raise over $500 million for
          startups and small businesses world-wide.
        </p>
        <Link to="/registration">
          <button className="btn btn-success">
            Get Started<span className="opacity-50">- For Free </span>
          </button>
        </Link>
        <button className="btn  btn-ghost hover:bg-transparent hover:shadow-none hover:text-success border-none">
          <FaCirclePlay />
          Watch Demo
        </button>
      </div>
      <div className="relative">
        <Features className="alert-warning md:-right-5 md:top-20 animate-bounce mobile-alert " />
        <Features className="alert-error bottom-40 hidden md:grid " />
        <img src="/assets/hero.webp" className="w-full" />
      </div>
    </div>
  );
}
