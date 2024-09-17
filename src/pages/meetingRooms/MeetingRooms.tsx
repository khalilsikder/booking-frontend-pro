import RoomCard from "@/components/Roomcard/RoomCard";
import { useGetAllroomsQuery } from "@/redux/api/baseApi";
import { TRoom } from "@/types";
import { useState } from "react";


const MeetingRooms = () => {
    const [searchTearm, setSearchterm] = useState("");
    const {data} = useGetAllroomsQuery({})
    return (
        <div className="container mt-4">
      <div className="flex text-xl text-center justify-center mx-auto mb-6">
        <input id="searchInput" type="text" placeholder="Search here" onChange={(event) => {setSearchterm(event.target.value)}} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      <div className="grid grid-cols-3">
        {
          data?.data?.filter((room:TRoom) => {
           if(searchTearm === ''){
            return room;
           } else if(room.name.toLowerCase().includes(searchTearm.toLocaleLowerCase())){
            return room;
           } 
          })
          .map((room: TRoom) => (
            <RoomCard key={room?._id} room={room}></RoomCard>
          ))
        }
      </div>
    </div>
    );
};

export default MeetingRooms;