import { FaCirclePlay } from "react-icons/fa6";
import Subtitle from "./Subtitle";
import Features from "./Features";

export default function Hero() {
  return (
    <div className="grid max-w-1xl mx-auto md:grid-cols-2 items-center p-5 pb-0 bg-base-100 ">
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
        <button className="btn btn-success">
          Get Started<span className="opacity-50">- For Free </span>
        </button>
        <button className="btn  btn-ghost hover:bg-transparent hover:shadow-none hover:text-success border-none">
          <FaCirclePlay />
          Watch Demo
        </button>
      </div>
      <div className="relative">
        <Features className="alert-warning -right-5 top-20 animate-bounce" />
        <Features className="alert-error bottom-40 " />
        <img src="/assets/hero.webp" className="w-full" />
      </div>
    </div>
  );
}
