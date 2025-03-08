import DatePicker from "react-datepicker";
import ButtonOrange from "../../../Components/ButtonOrange/ButtonOrange";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
const ContactForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);

  return (
    <div>
      <form className="fieldset space-y-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered bg-opacity-10"
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="input input-bordered bg-opacity-10"
            required
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="input input-bordered bg-opacity-10"
            required
          />
          <input
            type="text"
            placeholder="Doctor Name"
            className="input input-bordered bg-opacity-10 "
            required
          />
          <DatePicker
            selected={startDate}
            placeholderText="Date"
            className="input input-bordered bg-opacity-10"
            onChange={(date) => setStartDate(date)}
            dateFormat={"dd/MM/yy"}
          />
          <DatePicker
            selected={startTime}
            onChange={(time) => setStartTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            placeholderText="Time"
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="input input-bordered bg-opacity-10"
          />
        </div>
        <ButtonOrange>Book Now</ButtonOrange>
      </form>

      {/* <div className="form-control mt-6 lg:col-span-2"></div> */}
    </div>
  );
};

export default ContactForm;
