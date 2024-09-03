import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const defaultFAQs = [
   {
      "question": "How do I apply for government services?",
      "answer": "You can apply for various government services through our online portal under the 'E-Services' section."
   },
   {
      "question": "How can I check the status of my application?",
      "answer": "You can check the status of your application by logging into your account and visiting the 'My Applications' section."
   },
   {
      "question": "What are the fees for different government services?",
      "answer": "The fees for different government services can be found on the 'Service Fees' page under the 'E-Services' section."
   },
   {
      "question": "How do I contact the relevant government department for support?",
      "answer": "You can contact the relevant government department through the contact details provided on the 'Contact Us' page."
   },
   {
      "question": "Where can I find information on the latest government initiatives and projects?",
      "answer": "Information on the latest government initiatives and projects can be found in the 'News' and 'Projects' sections of the portal."
   }
];

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

  if(!faqs || faqs=='') faqs=defaultFAQs;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col items-center justify-center p-5 md:p-20 border-2">
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
            description2={details.email ?? "hello@enugustate.gov.ng"}
          />
          {details.phone && <ContactItem
            icon={FaPhoneAlt}
            title="Phone"
            description1="Reach out to us by phone"
            description2={details.phone}
          />}
          <ContactItem
            icon={CiLocationOn}
            title="Location"
            description1="Find us at our office"
            description2={details.address ?? "Lion Building, Government House Enugu"}
          />
          <ContactItem
            icon={IoMdTime}
            title="Office Hours"
            description1="Our working hours"
            description2={details.office_hours ?? "Mon-Fri, 9am-5pm"}
          />
        </div>
      </div>
    </section>
  );
};
