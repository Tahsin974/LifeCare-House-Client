const BusinessHours = ({ doctor }) => {
  const { phoneNumber, clinicName, location, available } = doctor;
console.log(available)

  return (
    <div className=" text-center space-y-20 items-center">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Days</th>
              <th>Opening Time</th>
              <th>Closing Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {available.map((avail,index)=><tr key={index}>
            
            <td>{avail.split(': ')[0]}</td> 
            <td>{avail.split(': ')[1].split('-')[0]}</td> 
            <td>{avail.split(': ')[1].split('-')[1]}</td> 
            
            </tr>)}
            
          </tbody>
        </table>
      </div>

      {/* Optional: Add a general message or special hours note */}
      <div>
        <p className="text-gray-600">
          * Hours may vary on holidays. Please call ahead to confirm.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>{clinicName}</p>
        <p>{location}</p>
        <p>Phone: {phoneNumber}</p>
      </div>
    </div>
  );
};

export default BusinessHours;
