import { Route, Routes } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home-Page/Home/Home";
import SignUp from "../Pages/SignUp-Page/SignUp/SignUp";
import ProfilePage from "../Pages/Doctor-Profile-Page/ProfilePage/ProfilePage";
import Login from "../Pages/Login-Page/Login";
import Appointment from "../Pages/Appointment-Page/Appointment/Appointment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyAppointments from "../Pages/MyAppointmentsPage/MyAppointments/MyAppointments";
import DashboardLayOut from "../LayOut/DashboardLayOut";
import DashboardMyAppointments from "../Pages/Dashboard/DashboardMyAppointments/DashboardMyAppointments";
import DashboardAllUsers from "../Pages/Dashboard/DashboardAllUsers/DashboardAllUsers";
import AdminRoute from "./AdminRoute";
import MyHistory from "../Pages/Dashboard/MyHistory/MyHistory";
const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayOut />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardMyAppointments />} />
          {/* ADMIN ROUTES */}
          <Route
            path="/dashboard/all-users"
            element={
              <AdminRoute>
                <DashboardAllUsers />
              </AdminRoute>
            }
          />

          {/* USER ROUTES */}

          <Route
            path="/dashboard/DashboardMyAppointments"
            element={<DashboardMyAppointments />}
          />
          <Route path="my-history" element={<MyHistory />} />
        </Route>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/your-doctor/:id" element={<ProfilePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route
            path="/my-appointments"
            element={
              <PrivateRoute>
                <MyAppointments />
              </PrivateRoute>
            }
          />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default ReactRoutes;
