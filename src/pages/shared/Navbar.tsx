import Drop from "@/components/drop";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-8 container bg-[#003B95] rounded-md pl-4 pr-4">
        <div className="text-2xl text-white">
          <p>
            <Link to="/">ROOM BOOKING</Link>
          </p>
        </div>
        <div className="flex gap-8 text-lg text-white">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/meetingrooms">Meeting Rooms</Link>
          </p>
          <p>
            <Link to="/aboutus">About Us</Link>
          </p>
          <p>
            <Link to="/contactus">Contract Us</Link>
          </p>
          <p>
            <Link to="/admindashboard">Dashboard</Link>
          </p>
        </div>
        <Link to="/login">
        <div className="flex text-white">
          <p>Login</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
