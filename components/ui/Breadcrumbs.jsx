import { LuHouse } from "react-icons/lu";
import { Link } from "react-router";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/">
            <LuHouse />
          </Link>
        </li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
