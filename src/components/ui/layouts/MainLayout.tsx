
import Footer from '@/pages/shared/Footer';
import Navbar from '@/pages/shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
            
        </div>
    );
};

export default MainLayout;