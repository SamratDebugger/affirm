import CheckIcon from "./ui/CheckIcon";

export default function Features({ className }) {
  return (
    <div role="alert" className={`alert  w-fit absolute z-10 ${className} `}>
      <CheckIcon />
      <span> The Best on The Net!</span>
    </div>
  );
}
