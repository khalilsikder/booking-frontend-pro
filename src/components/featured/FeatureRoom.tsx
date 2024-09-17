import { useGetAllroomsQuery } from "@/redux/api/baseApi";
import { TRoom } from "@/types";
import RoomCard from "../Roomcard/RoomCard";
import { Link } from "react-router-dom";

const FeatureRoom = () => {
    const {data:rooms} = useGetAllroomsQuery({});
    console.log(rooms);
    return (
        <div className="container">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {rooms?.data?.slice(0,6).map((room: TRoom) => (
        <RoomCard key={room?._id} room={room}></RoomCard>
        ))}
      </div>
      <div className="text-center justify-center text-[#04D3E6] text-xl">
        <Link to="/meetingrooms">see more rooms</Link>
      </div>
    </div>
    );
};

export default FeatureRoom;