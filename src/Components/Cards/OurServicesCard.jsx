import { useLocation } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";

export const ServiceCard = ({ icon, title, subtitle }) => {
  const location = useLocation();

  // Limiting subtitle to first 5 lines of text
  const limitedSubtitle = subtitle.split('\n').slice(0, 5).join('\n');

  return (
    <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col items-start justify-start w-full h-full">
      <div className="rounded-full p-3 bg-green-500 text-white absolute top-0 -mt-6 left-1/2 transform -translate-x-1/2">
        <FiBriefcase className="w-6 h-6" />
      </div>

      <div className="pt-6">
        <h3 className="text-[20px] font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{limitedSubtitle}</p>
      </div>
    </div>
  );
};
