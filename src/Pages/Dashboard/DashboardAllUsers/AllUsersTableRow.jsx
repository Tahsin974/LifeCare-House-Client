import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AllUsersTableRow = ({ user, index, refetch }) => {
  const { _id, name, email } = user;
  const axiosSecure = useAxiosSecure();
  const handleRemoveUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-user/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Removed!",
              text: `${name} has been removed.`,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `!!You want make ${name} admin!!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/make-admin/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Yeah!!!",
              text: `${name} is your new admin`,
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {user?.role === "admin" ? (
          <p className="text-green-500">Admin</p>
        ) : (
          <button
            onClick={() => handleMakeAdmin(_id)}
            className="btn btn-sm bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleRemoveUser(_id)}
          className="btn btn-sm bg-[#212631] text-white border-[#212631] hover:bg-[#212631]  hover:border-[#212631] rounded-md"
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default AllUsersTableRow;
