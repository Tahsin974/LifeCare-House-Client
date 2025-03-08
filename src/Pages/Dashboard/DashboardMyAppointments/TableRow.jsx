import Payment from "../Payment/Payment/Payment";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const TableRow = ({ appointment, index, refetch }) => {
  const { _id, name, doctorName, date, time, serviceName, doctorVisit } =
    appointment;
  let [isOpen, setIsOpen] = useState(false);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{doctorName}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{serviceName}</td>
      <td>
        {appointment?.status && appointment?.transactionID ? (
          <p>
            <span className="text-orange-400">{appointment.status}</span> <br />
            <span className="font-bold">id : </span>
            {appointment.transactionID}
          </p>
        ) : (
          <>
            <Button
              onClick={() => setIsOpen(true)}
              className="btn bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md btn-sm"
            >
              Pay
            </Button>
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
                    className="w-full space-y-2 max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-150 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                  >
                    <div className="flex justify-end items-center">
                      <button
                        onClick={() => setIsOpen(false)}
                        className="btn btn-circle btn-sm btn-ghost"
                      >
                        <IoMdClose size={20} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <small className="text-red-400">Hello, {name}</small>
                      <h3 className="text-2xl font-bold">
                        Please Pay for {serviceName}
                      </h3>
                      <p className="font-light text-md">
                        Your Appointment:{" "}
                        <span className="text-yellow-500">{date}</span> at{" "}
                        {time}
                      </p>

                      <h3 className="text-xl font-bold">
                        Please Pay: ${doctorVisit}
                      </h3>
                    </div>
                    <div className="divider"></div>
                    <Payment
                      appointmentId={_id}
                      serviceName={serviceName}
                      doctorVisit={doctorVisit}
                      refetch={refetch}
                    />
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
