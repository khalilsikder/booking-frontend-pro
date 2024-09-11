import Banner from "@/components/Banner/Banner";
import FeatureRoom from "@/components/featured/FeatureRoom";
import ServiceSection from "@/components/ServiceSection/ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner/>
            <ServiceSection/>
            <FeatureRoom/>
        </div>
    );
};

export default Home;