import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
const TableRow = ({ appointment, index }) => {
  const { name, doctorName, date, time, serviceName } = appointment;
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

                      <h3 className="text-xl font-bold">Please Pay: $200</h3>
                    </div>
                  </ModalHeader>
                  <div className="divider"></div>
                  <ModalBody className="space-y-4">
                    <input
                      className="input input-bordered"
                      type="text"
                      placeholder="Card Number"
                    />
                    <input
                      className="input input-bordered"
                      placeholder="MM/YY/CVC"
                      type="text"
                    />
                    <button className="btn  bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md">
                      Pay
                    </button>
                  </ModalBody>
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
