import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuthContext from "../Context/useAuthContext";

const useAdmin = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: adminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.email}`);
      return res.data?.admin;
    },
  });

  return [isAdmin, adminLoading];
};

export default useAdmin;
