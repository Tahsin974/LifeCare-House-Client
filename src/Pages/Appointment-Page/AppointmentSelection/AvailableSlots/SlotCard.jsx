import { IoMdTime } from "react-icons/io";
import MyModal from "./MyModal";
import useAuthContext from "../../../../Context/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import { useState } from "react";
import { Button } from "@headlessui/react";

const SlotCard = ({ slot, name, doctorName, doctor_visit }) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const { available, time } = slot;
  console.log("avail:", available);
  const { user } = useAuthContext();
  const location = useLocation();
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    if (user?.email) {
      return setIsOpen(true);
    } else {
      return Swal.fire({
        title: "You Are Not Logged In",
        text: "Please Login For Take Appointment",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  }

  return (
    <div className="card bg-white shadow-xl p-4 border border-gray-200">
      <div className="card-body items-center text-center">
        <p className="flex items-center gap-2">
          <IoMdTime size={20} />
          {time}
        </p>
        <div className="card-actions mt-4">
          <Button
            onClick={open}
            className="btn lg:btn-wide  bg-orange-600 text-white  hover:bg-orange-700  hover:border-orange-700"
            disabled={!available && true}
          >
            Book Appointment
          </Button>

          <MyModal
            time={time}
            name={name}
            doctorName={doctorName}
            doctor_visit={doctor_visit}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default SlotCard;
