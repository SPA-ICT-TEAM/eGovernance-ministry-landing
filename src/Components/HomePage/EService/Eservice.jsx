import { FiBriefcase, FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";

export const ServiceCard = ({ icon, title, subtitle, price, image }) => {
  const location = useLocation();
  const isService = location.pathname.includes('eService');

  const formatPrice = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={`relative bg-white rounded-lg flex flex-col ${isService ? "w-[400px] justify-start items-start" : "items-center justify-center "}`}>
      {isService && (
        <img src={image} alt={title} className="rounded-t-lg w-full h-40 object-cover" />
      )}
      <div className={`rounded-full p-3 bg-green-500 text-white absolute top-0 -mt-6 ${isService ? "hidden" : "block"}`}>
        {icon}
      </div>
      <div className={`rounded-lg p-3 bg-green-500 text-white absolute bottom-0 -mb-4 ${isService ? "hidden" : "block"}`}>
        <button>Pay for service</button>
      </div>
      <div className={`${isService ? "p-4 w-full" : "p-11 py-20"} flex flex-col gap-4`}>
        <div className={`flex flex-col gap-4 ${isService ? "items-start" : "items-center"}`}>
          <p className="text-[20px] font-semibold">{title}</p>
          <p className="text-gray-400">{subtitle}</p>
        </div>
        <p className="text-green-500 font-bold text-[18px]">{formatPrice(price)}</p>
        <div className={`flex w-full justify-between ${isService ? "block":"hidden"}`}>
          <button className="border p-3 rounded-lg hover:bg-gray-200">View Details</button>
          <div className="p-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-500">
            <FiShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const services = [
  {
    icon: <FiBriefcase className="w-6 h-6" />,
    image: "https://etransport.enugustate.gov.ng/storage/images/services/FpNWcZX8PaPTxFezvzk3RFPXR1j6dRZk0o22Oa4F.jpg",
    title: "Vehicle Inspection",
    subtitle: "Vehicle Inspection",
    price: 10000,
  },
  {
    icon: <FiBriefcase className="w-6 h-6" />,
    image: "https://etransport.enugustate.gov.ng/storage/images/services/lIgjnOsyLEIjJPo2nyBzNKFqkUn4f31FjH99UucB.jpg",
    title: "Parking Permit",
    subtitle: "Parking Permit",
    price: 30000,
  },
];

export const Eservice = () => {
  return (
    <section className="flex items-center justify-center bg-gray-200">
      <div className="container flex flex-col gap-14 items-center justify-center p-20">
        <p className="text-green-800 text-5xl font-bold">e-Services</p>
        <div className="flex flex-wrap gap-8">
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
        <p className="text-green-500 cursor-pointer">More on e-services</p>
      </div>
    </section>
  );
};
