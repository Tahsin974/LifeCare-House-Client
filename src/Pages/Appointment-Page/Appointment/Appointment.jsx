import PageTitle from "../../../Components/PageTitle/PageTitle";
import bgImg from "../../../assets/Appointment/dental-cabinet.jpg";
import AppointmentSelection from "../AppointmentSelection/AppointmentSelection";

const Appointment = () => {
  return (
    <div>
      <PageTitle pageName={"Appointment"} />
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-90">
          <div className="hero-content  text-center lg:p-24 md:p-16 ">
            <AppointmentSelection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
