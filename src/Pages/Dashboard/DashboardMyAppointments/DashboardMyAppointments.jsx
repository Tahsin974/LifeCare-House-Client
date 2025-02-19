import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthContext from "../../../Context/useAuthContext";
import TableRow from "./TableRow";

const DashboardMyAppointments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const { data: myAppointments = [], isPending } = useQuery({
    queryKey: [user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-appointments?email=${user.email}`);
      return res.data;
    },
  });
  console.log(myAppointments);
  return (
    <div className=" bg-[#F1F5F9] min-h-screen p-10">
      {isPending ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-3xl font-bold text-left">
              My Appointments : {myAppointments.length}
            </h1>
          </div>
          <div className="overflow-x-auto mt-5 rounded-lg">
            <table className="table">
              {/* head */}
              <thead className="bg-[#E6E6E6] text-black">
                <tr>
                  <th>#</th>
                  <th>NAME</th>
                  <th>DATE</th>
                  <th>TIME</th>
                  <th>TREATMENT</th>
                  <th>PAYMENT</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {myAppointments.map((appointment, index) => (
                  <TableRow
                    key={appointment._id}
                    index={index}
                    appointment={appointment}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardMyAppointments;
