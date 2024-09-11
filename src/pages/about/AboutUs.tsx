// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";
import image1 from "../../assets/slider3.jpg";
import image2 from "../../assets/team1.jpg";
import image3 from "../../assets/team2.jpg";
import image4 from "../../assets/team3.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <h2 className="text-2xl m-4">About Ours</h2>
      <img src={image1} alt="" />
      <p className="mt-4 text-xl">
        we are a global lifestyle hospitality company that designs and operates
        premium meeting, event, and flexible office spaces. It is the largest
        single provider of dedicated meeting and event venues in North America
        and the UK. With a network of 39 locations across nine cities ours’s
        portfolio of brands includes etc.venues, Club 75, and the “by our” label
        for bespoke locations in partnership with other organizations. With a
        combined 44 years of experience, Our brands bring hospitality and
        lifestyle into traditional commercial real estate assets. We partner
        with the industry’s top landlords to deliver increased building value
        while also creating premium experiences for tenants. The company counts
        Ares and RXR Realty among its investors, and has been named one of
        America’s 100 Most Promising Companies by Forbes and a Best Workplace by
        Inc. magazine, Fortune magazine, and Built In.
      </p>
      <div className="mt-4">   
        <iframe className="mx-auto" width="950" height="315" src="https://www.youtube.com/embed/OblQXejHts8?si=xdntZJWVQLBeDmor" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
       <div className="container mt-4">
        <h2 className=" text-2xl mt-4 mb-4">Our team members</h2>
       <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide><img src= {image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src= {image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src= {image4} alt="" /></SwiperSlide>
        
      </Swiper>
       </div>
    </div>
  );
};

export default AboutUs;
