import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useDateContext from "../../../../Context/useDateContext";
import AppointmentForm from "./AppointmentForm";
import { IoMdClose } from "react-icons/io";
const MyModal = ({
  time,
  name,
  doctorName,
  doctor_visit,
  isOpen,
  setIsOpen,
}) => {
  const [startDate] = useDateContext();

  console.log(time, name, doctorName, doctor_visit, startDate);
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto  ">
          <div className="flex min-h-full items-center justify-center p-4 bg-black/50 ">
            <DialogPanel
              transition
              className="w-full space-y-5 max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-150 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex justify-between items-center">
                <DialogTitle
                  as="h3"
                  className="text-black font-medium  text-2xl"
                >
                  {name}
                </DialogTitle>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-circle bg-orange-600 text-white border-orange-600 hover:bg-orange-700  hover:border-orange-700 active:bg-orange-700 active:border-orange-700 font-bold"
                >
                  <IoMdClose size={20} />
                </button>
              </div>

              <AppointmentForm
                serviceName={name}
                time={time}
                doctorName={doctorName}
                doctor_visit={doctor_visit}
                startDate={startDate}
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MyModal;
