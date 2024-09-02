import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import { ServiceCard } from "../../../Cards/OurServicesCard";
import Footer from "../../../Footer/Footer";
import { Leaf, Shield, Zap, Phone } from "lucide-react"
export const OurService = () => {
  const { ministry } = useContext(UserContext);

  const renderServices = (services) => {
      if(services.length > 0) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 justify-start w-full items-center">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.name}
                    subtitle={service.description}
                  />
                ))}
            </div>
          );
      } else {
          return(
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 pt-20">
            <div className="container grid items-center justify-center gap-8 md:gap-12 lg:gap-16 px-4 md:px-6 lg:grid-cols-3 lg:gap-12 pb-20">
                <div className="space-y-3 text-center lg:col-span-1 lg:text-left px-10">
                    <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-green-900 aos-init aos-animate" data-aos="fade-right">Our Services</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed aos-init aos-animate" data-aos="fade-up">Explore our comprehensive range of services designed to support and enhance your operations.</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                <img src="https://etransport.enugustate.gov.ng/oops.png" className="w-[200px] h-[200px]" alt="" />
                        <p className="text-center text-gray-500">No services yet</p>
                        </div>
                     </div>

         </section>
          );
      }
  }
  return (
    <main>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 pt-20">

                    <div className="lg:col-span-2">
                        { (ministry && ministry.ourServices) && renderServices(ministry.ourServices) }
                    </div>
    </section>

<section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Our tommorrow is here!
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
