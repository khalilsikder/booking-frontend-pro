import MainLayout from "@/components/ui/layouts/MainLayout";
import AboutUs from "@/pages/about/AboutUs";
import ContactUs from "@/pages/contact/ContactUs";
import Admindashboard from "@/pages/dashboard/Admindashboard";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import MeetingRooms from "@/pages/meetingRooms/MeetingRooms";
import MyBookings from "@/pages/MyBookings/MyBookings";
import SignUp from "@/pages/signUp/SignUp";
import { createBrowserRouter } from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>, 
        children :[
            {
             path:'/',
             index: true,
             element:<Home/>
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
                path:'login',
                element:<Login/>
            },
            {
               path: 'signup',
               element: <SignUp/>
            },
            {
                path:'mybookings',
                element:<MyBookings/>
            },
            {
                path:'dashboard',
                element:<Admindashboard/>
            }
        
        ]      
    }, 
    
])
export default router;