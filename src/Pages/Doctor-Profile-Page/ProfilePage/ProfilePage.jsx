import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import ProfileSummary from "../Profile-Summary/Profile-Summary/ProfileSummary";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import DoctorInfo from "../Doctor-Info/DoctorInfo";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const ProfilePage = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: doctor = {}, isPending } = useQuery({
    queryKey: [axiosPublic, "doctor"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/doctors/${id}`);
      return res.data;
    },
  });

  return (
    <>
      <PageTitle pageName={"Your Doctor"} />
      {isPending ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="p-3">
          <DoctorInfo doctor={doctor} />
          <ProfileSummary doctor={doctor} />
        </div>
      )}
    </>
  );
};

export default ProfilePage;
