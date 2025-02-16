const AppointmentTableRow = ({ appointment, index }) => {
  return (
    <tr key={appointment._id}>
      <th>{index + 1}</th>
      <td>{appointment.name}</td>
      <td>{appointment.serviceName}</td>
      <td>{appointment.time}</td>
      <td>{appointment.phone}</td>
    </tr>
  );
};

export default AppointmentTableRow;
