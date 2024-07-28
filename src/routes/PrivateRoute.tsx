import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "../hooks";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const [user] = useLocalStorage("user", null);

  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <>{children}</>;
};
