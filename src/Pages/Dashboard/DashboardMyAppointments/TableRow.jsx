const TableRow = ({ appointment, index }) => {
  const { name, date, time, serviceName } = appointment;
  console.log(appointment);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{serviceName}</td>
      <td>
        <button className="btn btn-sm bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md">
          Pay
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
