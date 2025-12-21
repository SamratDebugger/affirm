import { FaCircleCheck } from "react-icons/fa6";
export default function CheckIcon() {
  return (
    <div className="relative">
      <FaCircleCheck className="size-6 text-success" />
      <div className="size-5 bg-white rounded-full absolute top-1/2 -translate-1/2 left-1/2 -z-1  "></div>
    </div>
  );
}
