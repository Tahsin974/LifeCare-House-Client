import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuthContext from "../../../Context/useAuthContext";

const MyHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthContext();
  const { data: myPayments = [], isPending } = useQuery({
    queryKey: [axiosSecure],
    queryFn: async () => {
      const res = await axiosSecure.get(`my-history?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(myPayments);
  return (
    <div className=" min-h-screen p-10">
      {isPending ? (
        <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="pb-10">
            <h1 className="text-3xl font-bold text-left">
              My Payments : {myPayments.length}
            </h1>
          </div>
          {!myPayments.length ? (
            <div className="hero bg-white min-h-screen">
              <div className="hero-content text-center">
                <div>
                  <h1 className="lg:text-5xl md:text-2xl text-xl font-bold text-slate-400">
                    You Do Not Have <br /> Any Appointments
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto border bg-white text-center rounded-t-lg">
              <table className="table">
                {/* head */}
                <thead className="bg-[#E6E6E6] text-black">
                  <tr>
                    <th>#</th>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service Name</th>
                    <th>Visit</th>
                    <th>Payment Date</th>
                  </tr>
                </thead>
                <tbody>
                  {myPayments.map((payment, index) => (
                    <tr key={payment._id}>
                      <td>{index + 1}</td>
                      <td>{payment.transactionId}</td>
                      <td>{payment.name}</td>
                      <td>{payment.email}</td>
                      <td>{payment.serviceName}</td>
                      <td>${payment.visit}</td>
                      <td>{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyHistory;
