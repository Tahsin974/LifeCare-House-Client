import { useForm } from "react-hook-form";
import ButtonOrange from "../../../../Components/ButtonOrange/ButtonOrange";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAuthContext from "../../../../Context/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AppointmentForm = ({
  startDate,
  time,
  serviceName,
  doctorName,
  doctor_visit,
}) => {
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
    <div className="card bg-white   shadow-2xl p-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body fieldset space-y-2"
      >
        <input
          type="text"
          placeholder="date"
          className="input input-bordered w-full"
          value={startDate}
          {...register("date")}
          readOnly
        />

        <input
          type="text"
          placeholder="time"
          className="input input-bordered w-full"
          value={time}
          {...register("time")}
          readOnly
        />

        <input
          type="text"
          placeholder="Doctor's Name"
          className="input input-bordered w-full"
          defaultValue={doctorName || ""}
          {...register("doctorName")}
          required
        />

        <input
          type="text"
          placeholder="Doctor's Visit"
          className="input input-bordered w-full"
          defaultValue={doctor_visit || 0}
          {...register("doctorVisit")}
          required
        />

        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full"
          defaultValue={user?.displayName || ""}
          {...register("name")}
          required
        />

        <input
          type="email"
          placeholder="email"
          className="input input-bordered w-full"
          defaultValue={user?.email || ""}
          {...register("email")}
          required
        />

        <input
          type="number"
          placeholder="phone number"
          className="input input-bordered w-full"
          {...register("phone")}
          required
        />

        <ButtonOrange>Submit</ButtonOrange>
      </form>
    </div>
  );
};

export default AppointmentForm;
