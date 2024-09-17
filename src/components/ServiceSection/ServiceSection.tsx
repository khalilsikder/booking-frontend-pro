

const ServiceSection = () => {
    return (
        <div className="container md:flex justify-between">
      <div className="card bg-[#3b5e92] rounded-lg text-neutral-content w-96">
        <div className="card-body p-8 items-center text-center">
          <h2 className="card-title text-white">Real-Time Availability</h2>
        </div>
      </div>
      <div className="card bg-[#586d8d] rounded-lg text-neutral-content w-96">
        <div className="card-body p-8 items-center text-center">
          <h2 className="card-title text-white">Instant Booking Confirmation</h2>
        </div>
      </div>
      <div className="card bg-[#8495ac] rounded-lg text-neutral-content w-96">
        <div className="card-body p-8 items-center text-center">
          <h2 className="card-title text-white">Flexible Scheduling, 24/7 Support.</h2>
        </div>
      </div>
    </div>
    );
};

export default ServiceSection;