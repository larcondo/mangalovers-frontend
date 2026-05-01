import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";

const ProtectedPage = () => {
  const { user } = useAuth();

  // If no user is logged in, redirect to login
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedPage;
