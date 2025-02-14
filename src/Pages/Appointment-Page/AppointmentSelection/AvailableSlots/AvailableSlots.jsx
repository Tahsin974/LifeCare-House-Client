import SlotCard from "./SlotCard";

const AvailableSlots = ({ service }) => {
  const { slots, name } = service;
  // console.log(service);
  return (
    <div className="space-y-10">
      <h1 className="lg:text-4xl md:text-4xl sm:text-3xl text-xl font-bold">
        Available slots for {service.name} .
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {slots.map((slot, index) => (
          <SlotCard key={index} slot={slot} name={name} />
        ))}
      </div>
    </div>
  );
};

export default AvailableSlots;
