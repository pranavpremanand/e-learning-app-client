import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const PublicRoute = (props) => {
  const token = localStorage.getItem("eLearningUserToken");
  if (token) {
    const decoded = jwtDecode(token);
    const expirationDate = new Date(decoded.exp * 1000);
    const isTokenExpired = expirationDate < new Date();
    if (isTokenExpired) {
      return props.children;
    } else {
      return <Navigate to={"/"} />;
    }
  } else {
    return props.children;
  }
};
