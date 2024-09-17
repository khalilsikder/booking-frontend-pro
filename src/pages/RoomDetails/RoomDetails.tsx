import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useGetAllroomsQuery } from "@/redux/api/baseApi";
import { TRoom } from "@/types";
import { Link } from "react-router-dom";


const RoomDetails = () => {
    const {data,isLoading,error} = useGetAllroomsQuery({

    });
  
  return (
    <div className="container">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="grid grid-cols-3">
            {data?.data?.map((room: TRoom) => (
              <div key={room._id}>
                <Card>
                  <CardHeader>
                    <img className="rounded-2xl" src={room?.image} />
                  </CardHeader>

                  <CardContent className="grid gap-4 text-center">
                    <div className=" flex items-center space-x-4 rounded-md border p-4">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Name: {room?.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Brand: {room?.floorNo}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          AvailableQuantity: {room?.capacity}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Description: {room?.pricePerSlot}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Price: ${room?.amenities}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="text-center justify-center">
                    <Button className="bg-[#307ae9] text-white px-6 py-2 rounded-xl mt-4 hover:bg-[#919eb1]"><Link to= '/booking'>Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
export default RoomDetails;
