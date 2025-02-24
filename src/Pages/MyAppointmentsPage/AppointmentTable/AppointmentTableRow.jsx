const AppointmentTableRow = ({ appointment, index }) => {
  return (
    <tr key={appointment._id}>
      <td>{index + 1}</td>
      <td>{appointment.doctorName}</td>
      <td>{appointment.serviceName}</td>
      <td>{appointment.time}</td>
      <td>{appointment.phone}</td>
    </tr>
  );
};

export default AppointmentTableRow;
