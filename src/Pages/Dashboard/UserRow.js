import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const handleMakeAdmin = () => {
    fetch(`https://safe-shelf-64042.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.result.acknowledged) {
          console.log(data.result.acknowledged);
          toast.success(`${email} Successfully made an admin`);
          refetch();
        }
      });
  };
  return (
    <tr key={user._id}>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={handleMakeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
