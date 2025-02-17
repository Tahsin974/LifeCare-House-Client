import img from "../../../../assets/Service/doctor-with-stethoscope.jpg";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Category from "../../../../Components/Category/Category";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("Preventive Care");
  const axiosPublic = useAxiosPublic();
  const { data: services = [], isPending } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("/services");
      return res.data;
    },
  });

  const categories = [...services.map((service) => service.category)];

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  const displayServices = services.filter(
    (service) => service.category === selectedCategory
  );

  return (
    <div className="my-24">
      <div className="hero bg-white min-h-screen ">
        <div className="hero-content flex-col lg:flex-row  items-start lg:space-x-4 space-y-9 ">
          <img
            src={img}
            className="lg:max-w-2xl   rounded-lg shadow-2xl mx-auto"
            alt="doctor's image"
          />
          <div>
            <div className="max-w-4xl mx-auto">
              <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold">
                Our Services
              </h1>
              <p className="py-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            {/* service category */}
            <div className="my-10">
              <Category
                handleCategory={handleCategory}
                selectedCategory={selectedCategory}
                categories={categories}
              />
            </div>
            {/* service related info */}
            {isPending ? (
              <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-ring loading-lg"></span>
              </div>
            ) : (
              <>
                {displayServices.map((service) => (
                  <ServiceCard
                    key={service._id}
                    service={service}
                  ></ServiceCard>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
