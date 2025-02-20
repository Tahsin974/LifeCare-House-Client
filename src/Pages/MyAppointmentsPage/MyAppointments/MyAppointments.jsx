import AppointmentTableRow from "../AppointmentTable/AppointmentTableRow";
import DatePicker from "react-datepicker";
import useDateContext from "../../../Context/useDateContext";
import useAuthContext from "../../../Context/useAuthContext";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyAppointments = () => {
  const axiosSecure = useAxiosSecure();
  const [, , formattedDate] = useDateContext();
  const [selectedDate, setSelectedDate] = useState(null);

  const { user } = useAuthContext();
  const { data: Dates = [] } = useQuery({
    queryKey: ["date"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/appointment-dates?email=${user.email}`
      );
      return res.data;
    },
  });
  const { data: appointments = [], isPending } = useQuery({
    queryKey: [selectedDate],
    queryFn: async () => {
      if (selectedDate) {
        const res = await axiosSecure.get(
          `/my-appointments?email=${user.email}&date=${selectedDate}`
        );
        return res.data;
      } else {
        const res = await axiosSecure.get(
          `/my-appointments?email=${user.email}`
        );
        return res.data;
      }
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
            <h1 className="lg:text-2xl md:text-2xl sm:text-2xl text-lg font-semibold text-center lg:me-auto md:me-auto sm:me-auto mr-6">
              My Appointments
            </h1>

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(formattedDate(date))}
              minDate={formattedDate(new Date())}
              popperPlacement="top-end"
              highlightDates={appointmentDates.map(
                (appointmentDate) => new Date(appointmentDate)
              )}
              customInput={
                <button className="btn btn-outline border-black text-black lg:btn-md md:btn-md btn-md  ">
                  {selectedDate === null ? "All Appointments" : selectedDate}
                </button>
              }
            />
          </div>
          {appointments.length ? (
            <div className="overflow-x-auto rounded-xl">
              <table className="table lg:table-lg md:table-md sm:tabs-sm ">
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
                  <h1 className="lg:text-5xl md:text-2xl text-xl font-bold text-slate-400">
                    You Do Not Have <br /> Any Appointments For {selectedDate}
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
