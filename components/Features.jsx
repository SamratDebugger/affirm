import { FaCircleCheck } from "react-icons/fa6";

export default function Features() {
  return (
    <div
      role="alert"
      className="alert alert-warning w-fit absolute -right-5 top-20 animate-bounce"
    >
      <FaCircleCheck className="size-6 text-success" />
      <span> The Best on The Net!</span>
    </div>
  );
}
