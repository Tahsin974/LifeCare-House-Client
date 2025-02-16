import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AppointmentTableRow from "../AppointmentTable/AppointmentTableRow";
import DatePicker from "react-datepicker";
import useDateContext from "../../../Context/useDateContext";
import useAuthContext from "../../../Context/useAuthContext";
import { useQuery } from "@tanstack/react-query";

const MyAppointments = () => {
  const axiosPublic = useAxiosPublic();
  const [startDate, setStartDate, formattedDate] = useDateContext();

  const { user } = useAuthContext();
  const { data: Dates = [] } = useQuery({
    queryKey: ["date"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/appointment-dates?email=${user.email}`
      );
      return res.data;
    },
  });
  const { data: appointments = [], isPending } = useQuery({
    queryKey: [startDate],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/my-appointments?email=${user.email}&date=${startDate}`
      );
      return res.data;
    },
  });
  const appointmentDates = Dates.map((appointment) =>
    formattedDate(new Date(appointment.date))
  );
  return (
    <div className=" bg-[#F1F5F9] min-h-screen  flex-col justify-center items-start p-6 space-y-6">
      {isPending ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="flex justify-center items-center px-3">
            <h1 className="text-2xl font-semibold text-center me-auto">
              My Appointments
            </h1>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(formattedDate(date))}
              minDate={formattedDate(new Date())}
              popperPlacement="top-end"
              highlightDates={appointmentDates.map(
                (appointmentDate) => new Date(appointmentDate)
              )}
              customInput={
                <button className="btn btn-outline ">{startDate}</button>
              }
            />
          </div>
          {appointments.length ? (
            <div className="overflow-x-auto rounded-xl">
              <table className="table table-lg">
                {/* head */}
                <thead className="bg-gray-200">
                  <tr className="text-black">
                    <th>#</th>
                    <th>NAME</th>
                    <th>SERVICE</th>
                    <th>TIME</th>
                    <th>PHONE</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {appointments.map((appointment, index) => (
                    <AppointmentTableRow
                      key={appointment._id}
                      appointment={appointment}
                      index={index}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="hero bg-white min-h-screen">
              <div className="hero-content text-center">
                <div>
                  <h1 className="text-5xl font-bold text-slate-400">
                    You Do Not Have <br /> Any Appointments For {startDate}
                  </h1>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyAppointments;
