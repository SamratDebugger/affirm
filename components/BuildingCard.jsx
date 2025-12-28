import { FaVectorSquare } from "react-icons/fa6";

export default function BuildingCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <div className="btn btn-circle btn-soft btn-xl btn-success ">
          <FaVectorSquare />
        </div>
        <h2 className="card-title">Card title!</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
      </div>
    </div>
  );
}
