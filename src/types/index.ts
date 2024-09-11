export type TRoom = {
    _id:string;
    name:string;
    image:string;
    roomNo:number;
    floorNo:number;
    capacity:number;
    pricePerSlot:number;
    amenities:[ "Projector", "Whiteboard"];
    isDeleted:boolean;
    slug:string;
    }