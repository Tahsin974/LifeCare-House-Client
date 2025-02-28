import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import Payment from "../Payment/Payment/Payment";
const TableRow = ({ appointment, index, refetch }) => {
  const { _id, name, doctorName, date, time, serviceName, doctorVisit } =
    appointment;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{doctorName}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{serviceName}</td>
      <td>
        <>
          <Button
            onPress={onOpen}
            className="btn bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md"
            size="sm"
          >
            Pay
          </Button>
          <Modal
            isOpen={isOpen}
            placement="auto"
            onOpenChange={onOpenChange}
            backdrop={"blur"}
            scrollBehavior={"outside"}
          >
            <ModalContent className="p-4">
              {() => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
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
                  </ModalHeader>
                  <div className="divider"></div>
                  <Payment
                    appointmentId={_id}
                    serviceName={serviceName}
                    doctorVisit={doctorVisit}
                    refetch={refetch}
                  />
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      </td>
    </tr>
  );
};

export default TableRow;
