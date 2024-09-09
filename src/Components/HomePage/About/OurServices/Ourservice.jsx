import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import { ServiceCard } from "../../../Cards/OurServicesCard";
import Footer from "../../../Footer/Footer";
import { Leaf, Shield, Zap, Phone } from "lucide-react";

export const OurService = () => {
  const { ministry } = useContext(UserContext);

  const renderServices = (services) => {
    if (services.length > 0) {
      return (
        <>
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16 w-full items-start">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.name}
              subtitle={service.description.split('\n').slice(0, 5).join('\n')}
            />
          ))}
        </div>
        </>


      );
    } else {
      return (
        <section className="w-full py-12 mx-24 md:py-20 lg:py-32 bg-gray-50 pt-32">
          <div className="container grid items-center justify-center gap-8 md:gap-12 lg:gap-16 px-4 md:px-6 lg:grid-cols-3 pb-20">
            <div className="space-y-3 text-center lg:col-span-1 lg:text-left px-10">
              <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-green-900" data-aos="fade-right">
                Our Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" data-aos="fade-up">
                Explore our comprehensive range of services designed to support and enhance your operations.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="https://eportal.enugustate.gov.ng/oops.png" className="w-[200px] h-[200px]" alt="No Services" />
              <p className="text-center text-gray-500">No services yet</p>
            </div>
          </div>
        </section>
      );
    }
  };

  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 pt-32">
        <div className="container mx-auto">
          {(ministry && ministry.ourServices) && renderServices(ministry.ourServices)}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 flex items-center justify-center mb-[-100px]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Our tomorrow is here!
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                Take the first step towards a sustainable future. Contact us today for a free consultation.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <a href="/contact" className="w-full max-w-sm p-3 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
