import { IoMdTime } from "react-icons/io";
import MyModal from "./MyModal";
import { Button, useDisclosure } from "@heroui/react";
import useAuthContext from "../../../../Context/useAuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const SlotCard = ({ slot, name }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const { available, time } = slot;
  const { user } = useAuthContext();
  const location = useLocation();
  const handleModal = () => {
    if (user?.email) {
      return onOpen();
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
  };

  return (
    <div className="card bg-white shadow-xl p-4">
      <div className="card-body items-center text-center">
        <p className="flex items-center gap-2">
          <IoMdTime size={20} />
          {time}
        </p>
        <div className="card-actions mt-4">
          <Button
            onPress={handleModal}
            className="btn lg:btn-wide  bg-orange-600 text-white border-orange-600 hover:bg-orange-700  hover:border-orange-700"
            disabled={available}
          >
            Book Appointment
          </Button>
          <MyModal
            time={time}
            name={name}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SlotCard;
