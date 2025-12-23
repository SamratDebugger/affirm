import { useContext, useEffect } from "react";
import { AffirmContext } from "../context/MyContext";
import { useNavigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AffirmContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  return <>{children}</>;
}
