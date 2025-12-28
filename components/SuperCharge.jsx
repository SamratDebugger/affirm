import { FaCheck } from "react-icons/fa6";
import Subtitle from "./Subtitle";

export default function SuperCharge() {
  return (
    <section className="bg-base-200">
      <div className="max-w-1xl mx-auto p-5 flex justify-between items-center">
        <div>
          <Subtitle text="What it does" />
          <h2 className="text-5xl font-bold">
            Supercharge your online business development
          </h2>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <FaCheck className="size-4 me-2 inline-block text-success" />
              <span className="text-lg opacity-50">
                Prioritize the features your customers need
              </span>
            </li>
            <li>
              <FaCheck className="size-4 me-2 inline-block text-success" />
              <span className="text-lg opacity-50">
                Align everyone around the roadmap
              </span>
            </li>
            <li>
              <FaCheck className="size-4 me-2 inline-block text-success" />
              <span className="text-lg opacity-50">
                Define your product vision with customer feedback
              </span>
            </li>
          </ul>
          <p>
            Spend less time writing a business plan and more time building your
            business. We help you with the best tools you need to best
            communicate your idea.
          </p>
        </div>
        <div className="relative">
          <img src="/assets/side-1.webp" alt="side-1" />
          <img
            className="absolute z-5 bottom-0 max-w-xs"
            src="/assets/side-2.webp"
            alt="side-2"
          />
          <img
            className="absolute z-10 top-0 max-w-xs right-0"
            src="/assets/side-3.webp"
            alt="side-3"
          />
        </div>
      </div>
    </section>
  );
}
