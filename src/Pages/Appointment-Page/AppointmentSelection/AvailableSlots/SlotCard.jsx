import { IoMdTime } from "react-icons/io";
import MyModal from "./MyModal";
import { Button, useDisclosure } from "@heroui/react";

const SlotCard = ({ slot, name }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { available, time } = slot;

  return (
    <div className="card bg-white shadow-xl p-4">
      <div className="card-body items-center text-center">
        <p className="flex items-center gap-2">
          <IoMdTime size={20} />
          {time}
        </p>
        <div className="card-actions mt-4">
          <Button
            onPress={onOpen}
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
