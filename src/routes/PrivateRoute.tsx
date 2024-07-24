import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  user: boolean;
}

export const PrivateRoute = ({ children, user }: PrivateRouteProps) => {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <>{children}</>;
};
