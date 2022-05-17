import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const MyAppoinments = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [appoinments, setAppoinments] = useState([]);
  useEffect(() => {
    const url = `https://safe-shelf-64042.herokuapp.com/booking?patientEmail=${user?.email}`;
    if (user) {
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/login");
          }
          return res.json();
        })
        .then((data) => {
          setAppoinments(data);
        });
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      {/* <h2>My Appoinments:{appoinments.length}</h2> */}
      <h2 className="text-accent text-2xl lg:text-3xl my-4 font-semibold">
        My Appoinments
      </h2>
      {appoinments?.length === 0 ? (
        <div>
          <h2 className="text-gray-500">You have no appoinments yet</h2>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appoinments?.map((appoinment, index) => (
                <tr key={appoinment._id}>
                  <th>{index + 1}</th>
                  <td>{appoinment.patientName}</td>
                  <td>{appoinment.treatmentName}</td>
                  <td>{appoinment.date}</td>
                  <td>{appoinment.slot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAppoinments;
