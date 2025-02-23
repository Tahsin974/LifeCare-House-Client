import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AllUsersTableRow from "./AllUsersTableRow";

const DashboardAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = [],

    refetch,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/all-users");
      return result.data;
    },
  });
  return (
    <div className=" bg-[#F1F5F9] min-h-screen p-10">
      <div>
        <div className="pb-10">
          <h1 className="text-3xl font-bold text-left">
            All Users : {allUsers.length}
          </h1>
        </div>
        {!allUsers.length ? (
          <div className="hero bg-white min-h-screen">
            <div className="hero-content text-center">
              <div>
                <h1 className="lg:text-5xl md:text-2xl text-xl font-bold text-slate-400">
                  You Do Not Have <br /> Any Appointments
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto mt-5 rounded-lg">
            <table className="table text-center">
              {/* head */}
              <thead className="bg-[#E6E6E6] text-black">
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>JOB</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {allUsers.map((user, index) => (
                  <AllUsersTableRow
                    key={user._id}
                    index={index}
                    user={user}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardAllUsers;
