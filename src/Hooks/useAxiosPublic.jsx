import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://life-care-house-server.vercel.app",
    withCredentials: true,
  });
  return axiosPublic;
};

export default useAxiosPublic;
