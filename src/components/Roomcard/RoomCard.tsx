import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { TRoom } from "@/types";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const RoomCard = ({ room }: { room: TRoom }) => {
  return (
    <Card>
      <Link to={`/${room?.slug}`}>
        <CardHeader>
          <img className="rounded-2xl" src={room?.image} />
        </CardHeader>

        <CardContent className="grid gap-4 text-center">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
               Name: {room?.name}
              </p>
              <p className="text-sm font-medium leading-none">
               Capacity: {room?.capacity}
              </p>
              <p className="text-sm text-muted-foreground">PerSlot: {room?.pricePerSlot}</p>
            </div>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="text-center justify-center">
        <Button className="bg-[#307ae9] text-white px-6 py-2 rounded-xl mt-4 hover:bg-[#919eb1]"> <Link to='/roomdetails'>show details</Link></Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
