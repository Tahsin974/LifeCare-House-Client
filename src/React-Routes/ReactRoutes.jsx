import { Route, Routes } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home-Page/Home/Home";
import SignUp from "../Pages/SignUp-Page/SignUp/SignUp";
import ProfilePage from "../Pages/Doctor-Profile-Page/ProfilePage/ProfilePage";
import Login from "../Pages/Login-Page/Login";
import Appointment from "../Pages/Appointment-Page/Appointment/Appointment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/your-doctor/:id" element={<ProfilePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointment />
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
