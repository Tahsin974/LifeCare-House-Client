import MapComponent from "./MapComponent";

const Location = ({ doctor }) => {
  const {location} = doctor;
  return (
    <div className="items-center">
      <div className="opacity-55 relative">
      <MapComponent doctor={doctor} />
      <div className="bg-slate-800 lg:p-4 p-2 text-white max-w-sm absolute bottom-0 bg-opacity-90 text-center">
        <h1 className="font-bold text-lg">Location</h1>
        <p>{location}</p>
      </div>
      </div>
    </div>
  );
};

export default Location;
