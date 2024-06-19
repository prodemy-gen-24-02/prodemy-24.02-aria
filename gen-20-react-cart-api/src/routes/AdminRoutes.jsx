import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
  const isAdmin = useSelector(
    (state) => state.auth.token !== "" && state.auth.user.role === "ADMIN"
  );

  if (isAdmin) {
    alert("Welcome Admin");
    return <Outlet />;
  }
  //alert("Only admin allowed");
  return <Navigate to="/logintest" />;
}