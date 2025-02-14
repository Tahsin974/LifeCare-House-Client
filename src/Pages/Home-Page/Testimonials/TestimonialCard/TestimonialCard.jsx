import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@heroui/react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";

const TestimonialCard = ({ testimonial }) => {
  const { patientName, image, profession, feedback, rating } = testimonial;
  return (
    <div>
      <Card className=" border ">
        <div className="lg:flex p-5">
        <div>
        <CardHeader >
          
          <div className="flex gap-4">
          <Image
            alt="heroui logo"
            height={70}
            radius="sm"
            src={image}
            width={70}
          />
          <div className="flex flex-col">
            <p className="text-md">{patientName}</p>
            <p className="text-small text-default-500">{profession}</p>
          </div>
          </div>
          {/* <FaQuoteLeft className="text-orange-500 opacity-50" size={50}/> */}
          
        </CardHeader>

        <CardBody className=" px-2">
          <p>{feedback}</p>
        </CardBody>
        </div>
        <FaQuoteLeft className="text-orange-500 opacity-50" size={60}/>
        </div>
        <Divider />
        <CardFooter>
          <Rating
           initialRating={rating} 
           readonly
           emptySymbol={<IoIosStarOutline className="text-orange-500" size={25} />}
           fullSymbol={<IoIosStar className="text-orange-500" size={25}/>
           }
           />
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestimonialCard;
