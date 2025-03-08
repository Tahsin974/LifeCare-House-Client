import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";

const TestimonialCard = ({ testimonial }) => {
  const { patientName, image, profession, feedback, rating } = testimonial;
  return (
    <div>
      <div className=" border border-gray-200 card rounded-2xl ">
        <div className="lg:flex p-5">
          <div className="card-body space-y-5">
            {/* card header */}
            <div>
              <div className="lg:flex gap-4">
                <img
                  alt="heroui logo"
                  className="rounded-lg h-[70px] w-[80px]"
                  src={image}
                />
                <div className="flex flex-col">
                  <p className="text-lg font-semibold">{patientName}</p>
                  <p className="text-small font-light text-default-500">
                    {profession}
                  </p>
                </div>
              </div>
            </div>
            {/* card body */}
            <div className=" px-2">
              <p className="text-lg/7">{feedback}</p>
            </div>
          </div>
          <FaQuoteLeft className="text-orange-500 opacity-50" size={60} />
        </div>
        <div className="divider" />
        <div className="p-3">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={
              <IoIosStarOutline className="text-orange-500" size={25} />
            }
            fullSymbol={<IoIosStar className="text-orange-500" size={25} />}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
