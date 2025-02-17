import { Divider } from "@heroui/react";
import { CiDollar } from "react-icons/ci";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import Rating from "react-rating";
import ButtonOutline from "../../../../Components/ButtonOutline/ButtonOutline";
import { Link } from "react-router";

const DoctorCard = ({ doctor }) => {
  const {
    _id,
    name,
    specialization,
    rating,
    location,
    available,
    doctor_visit,
    image,
  } = doctor;
  return (
    <div>
      <div className=" card bg-white shadow-xl p-5 border h-[100%]">
        <figure className="p-4">
          <img src={image} alt="doctor's image" className="rounded-xl" />
        </figure>
        <div className="mt-4">
          <h2 className="card-title">{name}</h2>
          <p>
            <small className="text-gray-400">{specialization}</small>
          </p>
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={
              <IoIosStarOutline className="text-orange-500" size={25} />
            }
            fullSymbol={<IoIosStar className="text-orange-500" size={25} />}
            className="my-2"
          />

          <Divider />
          <div className="my-3 space-y-3">
            <p className="flex items-center gap-2">
              <IoLocationOutline size={25} /> {location}
            </p>
            <p className="flex items-center gap-2 ">
              <MdOutlineEventAvailable size={25} />
              {available}
            </p>
            <p className="flex items-center gap-2 ">
              <CiDollar size={25} />
              {doctor_visit}
            </p>
          </div>
          <div className="mt-5 card-actions justify-center">
            <Link to={`/your-doctor/${_id}`}>
              <ButtonOutline isWide={true}>View Profile</ButtonOutline>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
