import { Navigate } from "react-router";
import useAuthContext from "../Context/useAuthContext";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [isAdmin, adminLoading] = useAdmin();
  if (loading || adminLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user?.email && isAdmin) {
    return children;
  } else {
    return <Navigate to={"/not-found"} state={location.pathname} replace />;
  }
};

export default AdminRoute;
