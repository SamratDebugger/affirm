import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase";
import { useNavigate } from "react-router";
export default function ProfileMenu() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };
  return (
    <ul
      tabIndex="-1"
      className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    >
      <li>
        <a className="justify-between">
          Profile
          <span className="badge">New</span>
        </a>
      </li>
      <li>
        <a>Settings</a>
      </li>
      <li>
        <button onClick={handleLogout} className="text-error">
          Logout
        </button>
      </li>
    </ul>
  );
}
