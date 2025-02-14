import SummaryTab from "./SummaryTab";

const ProfileSummary = ({doctor}) => {
    const categories = ["Overview","Locations","Reviews","Business Hours"]
    
  return (
    <div className="my-20">
      <div className=" bg-white text-black min-h-screen shadow-lg border rounded-lg p-6">
        <div>
          <div>
            <SummaryTab 
            doctor={doctor}
            categories={categories}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
