// import { services } from "../../EService/Eservice";
import { ServiceCard } from "../../EService/Eservice";

export const Services = () => {
  return (
    <section className="flex items-center justify-center">
      {/* <div className="container flex flex-col gap-14 items-center justify-start p-20">
        <p className="text-gray-600 font-bold text-center">Add to basket and then checkout your order</p>
        <div className="flex flex-wrap  gap-8 justify-start w-full">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              subtitle={service.subtitle}
              price={service.price}
              image={service.image}
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};
