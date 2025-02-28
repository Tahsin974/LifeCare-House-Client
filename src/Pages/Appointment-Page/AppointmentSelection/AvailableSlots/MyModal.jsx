import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import useDateContext from "../../../../Context/useDateContext";
import AppointmentForm from "./AppointmentForm";
const MyModal = ({
  time,
  name,
  doctorName,
  doctor_visit,
  isOpen,
  onOpenChange,
}) => {
  const [startDate] = useDateContext();
  return (
    <Modal
      classNames={{
        closeButton:
          "bg-orange-600 text-white border-orange-600 hover:bg-orange-700  hover:border-orange-700 active:bg-orange-700 active:border-orange-700",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior={"inside"}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
            <ModalBody>
              <AppointmentForm
                serviceName={name}
                time={time}
                doctorName={doctorName}
                doctor_visit={doctor_visit}
                startDate={startDate}
              />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
