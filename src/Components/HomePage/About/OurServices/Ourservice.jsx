import { NavBar } from "../../NavBar";

export const OurService = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex p-20 px-60 items-center justify-between">
        <div className="max-w-[400px] text-[19px] text-gray-600">
          <p className="text-black text-5xl">Our Services</p>
          <p>
            Explore our comprehensive range of services designed to support and
            enhance your operations.
          </p>
        </div>

        <div className="max-w-[200px] flex flex-col items-center">
          <img src="https://etransport.enugustate.gov.ng/oops.png" alt="" />
          <p className="text-gray-600">No services yet</p>
        </div>
      </div>
    </div>
  );
};
