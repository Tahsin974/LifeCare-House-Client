import DatePicker from "react-datepicker";
import img from "../../../assets/Appointment/check-up.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AvailableServices from "./AvailableServices/AvailableServices";
import useDateContext from "../../../Context/useDateContext";
const AppointmentSelection = () => {
  const [startDate, setStartDate, formattedDate] = useDateContext();

  // console.log(startDate);
  return (
    <div className="flex-row space-y-20">
      <div className=" grid lg:grid-cols-2 md:grid-cols-2  gap-y-4 justify-items-center items-center">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(formattedDate(date))}
          minDate={formattedDate(new Date())}
          inline
        />

        <img
          src={img}
          className="lg:w-[35rem] md:w-[30rem] sm:w-[25rem] w-[16rem] rounded-lg shadow-2xl  transition  duration-700 ease-in-out  hover:scale-110"
        />
      </div>
      <div id="all-services">
        <SectionTitle
          subHeading={`Available Services on ${startDate}`}
          heading={"Please select a service."}
        />
        <AvailableServices />
      </div>
    </div>
  );
};

export default AppointmentSelection;
