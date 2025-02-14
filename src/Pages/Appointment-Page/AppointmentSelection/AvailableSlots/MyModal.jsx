import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import ButtonOrange from "../../../../Components/ButtonOrange/ButtonOrange";
import useDateContext from "../../../../Context/useDateContext";
const MyModal = ({ time, name, isOpen, onOpenChange }) => {
  const [startDate] = useDateContext();
  return (
    <Modal
      classNames={{
        closeButton:
          "bg-orange-600 text-white border-orange-600 hover:bg-orange-700  hover:border-orange-700 active:bg-orange-700 active:border-orange-700",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
            <ModalBody>
              <div className="card bg-white   shadow-2xl">
                <form className="card-body">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="date"
                      className="input input-bordered"
                      value={startDate}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="time"
                      className="input input-bordered"
                      value={time}
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="full name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      placeholder="phone number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <ButtonOrange>Submit</ButtonOrange>
                  </div>
                </form>
              </div>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
