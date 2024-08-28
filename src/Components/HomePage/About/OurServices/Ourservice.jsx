import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import { NavBar } from "../../NavBar";
import { ServiceCard } from "../../../Cards/ServiceCard";

export const OurService = () => {
  const { ministry, loading, error } = useContext(UserContext);

  const renderServices = (services) => {
      if(services.length > 0) {
          return (
            <div className="flex flex-wrap  gap-8 justify-start w-full items-center">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    // icon={service.icon}
                    title={service.name}
                    subtitle={service.description}
                  />
                ))}
            </div>
          );
      } else {
          return(
            <div className="max-w-[200px] flex flex-col items-center">
                <img src="https://etransport.enugustate.gov.ng/oops.png" alt="" />
                <p className="text-gray-600">No services yet</p>
            </div>
          );
      }
  }
  return (
    <div className="flex items-center justify-center bg-gray-200">
      <div className="container flex flex-col p-20 px-10 items-center justify-between">
        <div className="w-[100%] mb-8 text-[19px] text-gray-600">
          <p className="text-black text-5xl text-center mb-3">Our Services</p>
          <p>
            Explore our comprehensive range of services designed to support and
            enhance your operations.
          </p>
        </div>

        { renderServices(ministry.ourServices) }
        
      </div>
    </div>
  );
};
