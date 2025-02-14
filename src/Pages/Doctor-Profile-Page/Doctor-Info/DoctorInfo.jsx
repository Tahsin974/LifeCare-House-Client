
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";
import { IoLocationOutline } from "react-icons/io5";

const DoctorInfo = ({doctor}) => {


  const {name,specialization,rating,location,image,services} = doctor;
  return (
    <div className="py-12">
       <div className="card lg:card-side md:card-side bg-white shadow-lg p-4 border">
       
       <figure>
       <img
         src={image}
         alt="Album"
         className="rounded-lg"
       />
       </figure>
   
     <div className="card-body">
       <h2 className="card-title">{name}</h2>
       <p> <small className="text-gray-500">{specialization}</small> </p>
       <Rating
                   initialRating={rating}
                   readonly
                   emptySymbol={
                     <IoIosStarOutline className="text-orange-500" size={25} />
                   }
                   fullSymbol={<IoIosStar className="text-orange-500" size={25} />}
                   className="my-2"
                 />
                 <p className="flex items-center gap-2"><IoLocationOutline size={25} /> {location}</p>
                 <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col gap-4 my-2 ">
                   {
                     services.map((service,index) => <div
                     key={index}
                     className="border border-black py-3 px-4 rounded-lg max-w-[200px]"
                     >{service}</div> )
                   }
                 </div>
     </div>
   </div>
    </div>
  );
};

export default DoctorInfo;
