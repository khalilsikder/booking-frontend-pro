import App from "@/App";
import AboutUs from "@/pages/about/AboutUs";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard";
import ContactUs from "@/pages/contact/ContactUs";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import MeetingRooms from "@/pages/meetingRooms/MeetingRooms";
import MyBookings from "@/pages/MyBookings/MyBookings";
import NotFound from "@/pages/notfound/NotFound";
import SignUp from "@/pages/signUp/SignUp";
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
        ]      
    },
    {
        path: '/',
        element: <App/>, 
        children :[
    
            {
               path: 'admindashboard',
               element: <AdminDashboard/>
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