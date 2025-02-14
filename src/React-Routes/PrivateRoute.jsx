import { Navigate } from "react-router";
import useAuthContext from "../Context/useAuthContext";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuthContext();
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user?.email) {
    return children;
  } else {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
};

export default PrivateRoute;
