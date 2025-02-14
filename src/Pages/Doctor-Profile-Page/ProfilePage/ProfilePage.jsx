import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import ProfileSummary from "../Profile-Summary/Profile-Summary/ProfileSummary"
import PageTitle from "../../../Components/PageTitle/PageTitle";
import DoctorInfo from "../Doctor-Info/DoctorInfo";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";



const ProfilePage = () => {
    const {id} = useParams();
    const axiosPublic = useAxiosPublic();
    const {data : doctor ={} , isPending } = useQuery({
      queryKey:['doctor', id],
      queryFn: async() =>{
        const res = await axiosPublic.get(`/doctors/${id}`);
        return res.data;
      }
    })
    
    return (
        <>
        {isPending ?<div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-ring loading-lg"></span>
    
          </div> : <div>
          <PageTitle pageName={'Your Doctor'}/>
          <DoctorInfo doctor={doctor}/>
          <ProfileSummary doctor={doctor} />
      </div>}
        </>
        
    );
};

export default ProfilePage;