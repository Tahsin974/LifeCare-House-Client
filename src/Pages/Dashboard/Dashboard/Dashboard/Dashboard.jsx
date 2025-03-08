import { useQuery } from "@tanstack/react-query";
import { FaFileAlt, FaUser, FaUsers } from "react-icons/fa";
import useAuthContext from "../../../../Context/useAuthContext";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: [user?.email, "stats"],
    queryFn: async () => {
      if (user?.email) {
        const result = await axiosSecure.get(
          `/admin-stats?email=${user?.email}`
        );
        return result.data;
      }
    },
  });
  const { data: patientStats = [] } = useQuery({
    queryKey: [user?.email, "patientStats"],
    queryFn: async () => {
      if (user?.email) {
        const result = await axiosSecure.get(
          `/patients-stats?email=${user?.email}`
        );
        return result.data;
      }
    },
  });
  const pieChartData = patientStats.map((stat) => {
    return { name: stat.year, value: stat.patients };
  });

  console.log(patientStats);
  // custom design for pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-4 space-y-5 min-h-screen">
      {/* admin stats */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {/* Doctors */}
        <div className="card bg-white p-7 space-y-5 ">
          <div className="grid grid-cols-2 items-center">
            {/* icon */}
            <figure className="bg-[#ffecef] p-5 rounded-lg w-[70px]">
              <FaUser size={30} className="text-[#FF0034]" />
            </figure>
            <h1 className="text-5xl font-bold">{stats.doctors}</h1>
          </div>
          <progress
            className="progress progress-secondary w-56 "
            value={stats.doctors}
            max="100"
          ></progress>
          <h3 className="text-xl font-semibold">Doctors</h3>
        </div>

        {/* Patients */}
        <div className="card bg-white p-7 space-y-5">
          <div className="grid grid-cols-2 items-center">
            {/* icon */}
            <figure className="bg-[#e9fcd3] p-5 rounded-lg w-[70px]">
              <FaUsers size={30} className="text-[#7BB13C]" />
            </figure>
            <h1 className="text-5xl font-bold">{stats.patients}</h1>
          </div>
          <progress
            className="progress progress-success w-56 duration-250"
            value={stats.patients}
            max="100"
          ></progress>

          <h3 className="text-xl font-semibold">Patients</h3>
        </div>
        <div className="card bg-white p-7 space-y-5">
          <div className="grid grid-cols-2 items-center">
            {/* icon */}
            <figure className="bg-[#fff2d7] p-5 rounded-lg w-[70px]">
              <FaFileAlt size={30} className="text-[#FFBC34]" />
            </figure>
            <h1 className="text-5xl font-bold">{stats.appointments}</h1>
          </div>
          <progress
            className="progress progress-warning w-56 "
            value={stats.appointments}
            max="100"
          ></progress>
          <h3 className="text-xl font-semibold">Appointments</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="my-6">
        {/* Patients charts */}
        <div className="card bg-white lg:p-5 p-2 ">
          <h2 className="text-2xl font-semibold lg:text-left text-center">
            Patients
          </h2>
          <div className="divider divider-neutral"></div>
          <div className="grid lg:grid-cols-2 gap-4 items-center ">
            <div className="w-full  h-[300px]">
              <ResponsiveContainer>
                <AreaChart
                  data={patientStats}
                  margin={{
                    top: 10,
                    right: 40,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="patients"
                    stroke="#454545"
                    fill="#454545"
                  />
                  <Legend />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="w-[100%]  h-[300px] flex items-center justify-center">
              <div>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Chart */}
      </div>
    </div>
  );
};

export default Dashboard;
