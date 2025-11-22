import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = () => {
  const [isAuthenticated] = useState(false); // or check localStorage/token

  return isAuthenticated ? <Outlet /> : <Navigate to="/rating" replace />;
};

export default ProtectedRoute;
