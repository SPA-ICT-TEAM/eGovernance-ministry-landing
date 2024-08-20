import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="flex flex-col gap-6 items-center p-8 border-b w-[500px]">
    <div className="flex gap-4 items-center cursor-pointer" onClick={onClick}>
      <p className="text-4xl">Q.</p>
      <p className="max-w-[350px]">{question}</p>
      <IoIosArrowDown
        className={`w-6 h-6 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
      />
    </div>
    {isOpen && <p className="text-gray-400">{answer}</p>}
  </div>
);

const ContactItem = ({ icon: Icon, title, description1, description2 }) => (
  <div className="flex flex-col gap-3 items-center w-[300px]">
    <Icon className="text-green-600 w-10 h-10" />
    <div className="flex flex-col gap-1 items-center text-center">
      <p>{title}</p>
      <p>{description1}</p>
      {description2 && <p>{description2}</p>}
    </div>
  </div>
);

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the mission of the Enugu Ministry of Transport?",
      answer:
        "The mission of the Enugu Ministry of Transport is to leverage transportation as a key catalyst for the economic transformation of Enugu State and the broader Southeast region, extending its impact into neighbouring Central Africa. This will be achieved by adopting a multimodal transport system, leveraging innovation and technology through smart transport solutions, and establishing a world-class, efficient traffic management system.",
    },
    {
      question: "What is the Smart Transport Program (STP) and its focus areas?",
      answer:
        "The Smart Transport Program (STP) is an initiative set up by the Enugu Ministry of Transport to transform the transport sector. The STP focuses on four key thematic areas: digitization of ministry processes and e-payment, establishing a world-class traffic management system, developing a multi-modal transport system to reduce the carbon footprint, and creating jobs and empowerment opportunities for the youth through the transport sector.",
    },
    {
      question: "What is the vision of the Enugu Ministry of Transport?",
      answer:
        "The vision of the Enugu Ministry of Transport is to build a world-class, efficient, sustainable, and smart transport system. This vision emphasizes modernization, enhancing infrastructure, promoting public transit, and ensuring a forward-looking and integrated transport system for seamless connectivity and sustainable mobility.",
    },
    {
      question:
        "How does the Enugu Ministry of Transport plan to achieve its mission and vision?",
      answer:
        "To achieve its mission and vision, the Enugu Ministry of Transport will implement the Smart Transport Program (STP), focusing on digitizing ministry processes and e-payment, establishing a world-class traffic management system, developing a multi-modal transport system to reduce the carbon footprint, and creating jobs and empowerment opportunities for the youth through the transport sector. These initiatives aim to modernize the transport infrastructure and ensure an efficient, sustainable, and smart transport system.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-20">
        <div className="flex container gap-16 justify-center">

      <div className="text-center">
        <h1 className="text-green-800 text-5xl font-bold p-5 border-b">FAQ's</h1>
        <div className="flex flex-col items-center">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-16 justify-center md:max-h-[500px]">
        <ContactItem
          icon={MdOutlineMailOutline}
          title="Email"
          description1="Contact us at"
          description2="transport@enugustate.gov.ng"
        />
        <ContactItem
          icon={FaPhoneAlt}
          title="Phone"
          description1="Reach out to us by phone"
          description2="07040244022"
        />
        <ContactItem
          icon={CiLocationOn}
          title="Location"
          description1="Find us at our office"
          description2="No. 5 FSP Avenue, Independence Layout Enugu"
        />
        <ContactItem
          icon={IoMdTime}
          title="Office Hours"
          description1="Our working hours"
          description2="8:00 AM - 5:00 PM"
        />
      </div>
        </div>
    </section>
  );
};
