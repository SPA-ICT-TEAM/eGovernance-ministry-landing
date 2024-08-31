import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="flex flex-col gap-6 items-center p-8 border-b w-full md:w-[500px]">
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
  <div className="flex flex-col gap-3 items-center w-full md:w-[300px]">
    <Icon className="text-green-600 w-10 h-10" />
    <div className="flex flex-col gap-1 items-center text-center">
      <p>{title}</p>
      <p>{description1}</p>
      {description2 && <p>{description2}</p>}
    </div>
  </div>
);

export const Faq = ({ faqs, details }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center p-5 md:p-20">
      <div className="flex flex-col md:flex-row container gap-16 justify-center">
        <div className="text-center">
          <h1 className="text-green-800 text-5xl font-bold p-5 border-b">FAQ's</h1>
          <div className="flex flex-col items-center">
            {faqs.map((faq, index) => (
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
            description2={details.email}
          />
          <ContactItem
            icon={FaPhoneAlt}
            title="Phone"
            description1="Reach out to us by phone"
            description2={details.phone}
          />
          <ContactItem
            icon={CiLocationOn}
            title="Location"
            description1="Find us at our office"
            description2={details.address}
          />
          <ContactItem
            icon={IoMdTime}
            title="Office Hours"
            description1="Our working hours"
            description2={details.office_hours}
          />
        </div>
      </div>
    </section>
  );
};
