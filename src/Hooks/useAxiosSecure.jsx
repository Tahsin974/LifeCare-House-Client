import axios from "axios";
import useAuthContext from "../Context/useAuthContext";
import { useNavigate } from "react-router";

const useAxiosSecure = () => {
  const { setUser, userLogOut } = useAuthContext();
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://life-care-house-server.vercel.app",
    withCredentials: true,
  });

  axiosSecure.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return console.log(error);
    }
  );
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.status === 401 || error.status === 403) {
        userLogOut().then(() => {
          setUser(null);
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
