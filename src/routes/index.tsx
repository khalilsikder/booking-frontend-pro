import App from "@/App";
import AboutUs from "@/pages/about/AboutUs";
import Booking from "@/pages/Booking/Booking";
import BookingManagements from "@/pages/BookingManagements";
import ContactUs from "@/pages/contact/ContactUs";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import MeetingRooms from "@/pages/meetingRooms/MeetingRooms";
import MyBookings from "@/pages/MyBookings/MyBookings";
import NotFound from "@/pages/notfound/NotFound";
import RoomDetails from "@/pages/RoomDetails/RoomDetails";
import Roommanagement from "@/pages/Roommanagement";
import SignUp from "@/pages/signUp/SignUp";
import { Slot } from "@radix-ui/react-slot";
import { createBrowserRouter } from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
        children :[
            {
               path: '',
               element: <Home/>
            },
            {
               path: 'meetingrooms',
               element: <MeetingRooms/>
            },
            {
                path: 'aboutus',
                element: <AboutUs/>,       
            },
            {
                path: 'contactus',
                element: <ContactUs/>,       
            },
            {
                path: '*',
                element: <NotFound/>
         
             },
             {
                 path:'mybookings',
                 element:<MyBookings/>
             }, 
             {
                path:'roomdetails',
                element:<RoomDetails/>
             },
             {
                path:'booking',
                element:<Booking/>
             }
        ]      
    },
    {
        path:'dashboard',
        element:<Dashboard/>,
        children:[
            {
                path:'roommanagement',
                element:<Roommanagement/>
            },
            {
                path:'slotmanagement',
                element: <Slot/>
            },
            {
                path:'bookingmanagement',
                element: <BookingManagements/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
       path: '/signup',
       element: <SignUp/>
    },
    
    
])
export default router;