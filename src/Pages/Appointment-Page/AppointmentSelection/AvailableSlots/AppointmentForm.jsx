import { useForm } from "react-hook-form";
import ButtonOrange from "../../../../Components/ButtonOrange/ButtonOrange";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuthContext from "../../../../Context/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AppointmentForm = ({ startDate, time, serviceName, doctorName }) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.serviceName = serviceName;
    // post info on database

    axiosPublic.post("/my-appoinment", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Your Appointment has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/my-appointments");
        reset();
      }
    });
  };

  return (
    <div className="card bg-white   shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <input
            type="text"
            placeholder="date"
            className="input input-bordered"
            value={startDate}
            {...register("date")}
            readOnly
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="time"
            className="input input-bordered"
            value={time}
            {...register("time")}
            readOnly
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Doctor's Name"
            className="input input-bordered"
            defaultValue={doctorName || ""}
            {...register("doctorName")}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
            defaultValue={user?.displayName || ""}
            {...register("name")}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            defaultValue={user?.email || ""}
            {...register("email")}
            required
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder="phone number"
            className="input input-bordered"
            {...register("phone")}
            required
          />
        </div>
        <div className="form-control mt-6">
          <ButtonOrange>Submit</ButtonOrange>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
