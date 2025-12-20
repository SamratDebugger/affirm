import { FaSquareFull } from "react-icons/fa6";

export default function Subtitle({ text }) {
  return (
    <h3 className="uppercase flex items-center gap-3 font-semibold text-sm mb-3">
      <FaSquareFull className="text-rose-600" />
      {text}
    </h3>
  );
}
