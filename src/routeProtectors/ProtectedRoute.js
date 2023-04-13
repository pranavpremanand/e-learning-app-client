import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
  const token = localStorage.getItem("eLearningUserToken");
  if (token) {
    const decoded = jwtDecode(token);
    const expirationDate = new Date(decoded.exp * 1000);
    const isExpired = expirationDate < new Date();
    if (isExpired) {
      return <Navigate to={"/login"} />;
    } else {
      return props.children;
    }
  } else {
    return <Navigate to={"/login"} />;
  }
};
