import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import image1 from '../../assets/b.b1.jpg'
import image2 from '../../assets/b.b2.png'
import { Link } from "react-router-dom";

  

const Banner = () => {
  
  return (
    <div>
      <Carousel className="container">
      <div className="relative w-full  mx-auto">
                    <img src={image1} />
                   <div className="absolute top-0 left-0 pt-80  w-full h-full place-items-end gap-4 pb-48 justify-center bg-black bg-opacity-0 text-white">
                   <h1 className="text-3xl">Book Your Ideal Meeting Room with Ease</h1>
                   <p>Efficient, hassle-free room booking for all your meeting needs</p>
                   <Link to= '/meetingroom'>
                   <button className="bg-[#307ae9] text-white px-6 py-2 rounded-xl mt-4">Book Now</button>
                   </Link>
                   </div>
                   
                </div>
                <div className="relative w-full  mx-auto">
                    <img src={image2} />
                    <div className=" absolute top-0 left-0 pt-80  w-full h-full place-items-end gap-4 pb-48 justify-center bg-black bg-opacity-0 text-white">
                   <h1 className="text-3xl">Book Your Ideal Meeting Room with Ease</h1>
                   <p>Efficient, hassle-free room booking for all your meeting needs</p>
                   <Link to= '/meetingroom'>
                   <button className="bg-[#307ae9] text-white px-6 py-2 rounded-xl mt-4">Book Now</button>
                   </Link>
                   </div>
                </div>
            </Carousel>
    </div>
  );
};

export default Banner;
