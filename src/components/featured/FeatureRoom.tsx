import { useGetAllroomsQuery } from "@/redux/api/baseApi";
import { TRoom } from "@/types";
import RoomCard from "../Roomcard/RoomCard";
import { Link } from "react-router-dom";

const FeatureRoom = () => {
    const {data,isLoading} = useGetAllroomsQuery({});
    console.log(data);
    return (
        <div className="container">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {data?.data?.slice(0,6).map((room: TRoom) => (
        <RoomCard key={room?._id} room={room}></RoomCard>
        ))}
      </div>
      <div className="text-center justify-center text-[#04D3E6] text-xl">
        <Link to="/products">see more products</Link>
      </div>
    </div>
    );
};

export default FeatureRoom;