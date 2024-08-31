import { FiBriefcase, FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { ServiceCard } from "../../Cards/ServiceCard";


export const Eservice = ({ ministry }) => {
  return (
    <>
    <section className="flex items-center justify-center bg-gray-200">
      <div className="container flex flex-col gap-14 items-center justify-center p-20">
        <p className="text-green-800 text-5xl font-bold">e-Services</p>
        <div className="flex flex-wrap gap-8">
          {ministry.services.map((service, index) => (
            <ServiceCard
              key={index}
              // icon="{service.icon}"
              title={service.name}
              subtitle={service.description}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
        <p className="text-green-500 cursor-pointer">More on e-services</p>
      </div>
    </section>
    </>
  );
};

// export default Eservice;
