import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile max-w-7xl mx-auto">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content px-6 lg:my-10">
        <h2 className="text-3xl font-bold text-secondary">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-gray-200 text-base-content">
          <li className="my-1">
            <Link to="/dashboard">My Appoinments</Link>
          </li>
          <li className="my-1">
            <Link to="/dashboard/review">My Review</Link>
          </li>
          <li className="my-1">
            <Link to="/dashboard/history">My History</Link>
          </li>
          {admin && (
            <>
              <li className="my-1">
                <Link to="/dashboard/users">All User</Link>
              </li>
              <li className="my-1">
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
              </li>
              <li className="my-1">
                <Link to="/dashboard/manage">Manage Doctors</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
