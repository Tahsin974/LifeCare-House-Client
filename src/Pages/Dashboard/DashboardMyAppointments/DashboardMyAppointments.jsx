import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthContext from "../../../Context/useAuthContext";
import AppointmentsTableRow from "./AppointmentsTableRow";

const DashboardMyAppointments = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const { data: myAppointments = [] } = useQuery({
    queryKey: [user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-appointments?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className=" bg-[#F1F5F9] min-h-screen p-10">
      <div>
        <div className="pb-10">
          <h1 className="text-3xl font-bold text-left">
            My Appointments : {myAppointments.length}
          </h1>
        </div>
        {!myAppointments.length ? (
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
                  <th>DATE</th>
                  <th>TIME</th>
                  <th>TREATMENT</th>
                  <th>PAYMENT</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {myAppointments.map((appointment, index) => (
                  <AppointmentsTableRow
                    key={appointment._id}
                    index={index}
                    appointment={appointment}
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

export default DashboardMyAppointments;
