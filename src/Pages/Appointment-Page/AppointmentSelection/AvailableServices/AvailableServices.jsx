import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import AvailableSlots from "../AvailableSlots/AvailableSlots";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const AvailableServices = () => {
  const [selectedService, setSelected] = useState(null);
  const axiosPublic = useAxiosPublic();
  const { data: services = [], isPending } = useQuery({
    queryKey: "available-services",
    queryFn: async () => {
      const result = await axiosPublic.get("/available-services");
      return result.data;
    },
  });

  // console.log(services);
  return (
    <div>
      {isPending ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service._id}
              onClick={() => setSelected(service)}
              className={
                selectedService === service
                  ? "p-6 flex items-center justify-around bg-orange-300 text-white rounded-lg border border-gray-200"
                  : "p-6 flex items-center justify-around bg-white rounded-lg border border-gray-200"
              }
            >
              <img
                src={service.image}
                alt=""
                className="w-[30%] aspect-3/2 object-contain rounded-lg"
              />
              <p className="lg:text-lg md:text-lg sm:text-lg text-base font-bold">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      )}
      {selectedService && (
        <div className="py-20">
          <AvailableSlots service={selectedService} />
        </div>
      )}
    </div>
  );
};

export default AvailableServices;
