import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import noImage from "../../../assets/images/no-image.jpg";

export const Hero = ({ ministry }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const defaultHero = () => {
      return(
        <section className="flex items-center justify-center">
        <div
          className="relative p-24 w-full  bg-cover bg-center pb-48 pt-36 text-white bg-[url('../../../assets/images/no-image.jpg')]"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex flex-col gap-6 container pb-16">
            <p
              className="text-5xl font-bold max-w-[550px]"
              data-aos="fade-left"
            >
              Hero Image Comming Soon
            </p>
            <p
              className="text-[18px]"
              data-aos="fade-left"
            >
              Details Coming soon
            </p>
          </div>
        </div>
      </section>
      );
  }

  return (!ministry || !ministry?.heroDetails) ? defaultHero() :  (
    <section className="flex items-center justify-center">
      <div
        className="relative p-24 w-full  bg-cover bg-center pb-48 pt-36 text-white"
        style={{
          backgroundImage: `url(${(ministry.heroDetails.hero_image) ? ministry.heroDetails.hero_image : noImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col gap-6 container pb-16">
          <p
            className="text-5xl font-bold max-w-[550px]"
            data-aos="fade-left"
          >
            {ministry?.heroDetails?.title}
          </p>
          <p
            className="text-[18px]"
            data-aos="fade-left"
          >
            {ministry.heroDetails.subtitle}
          </p>
          <div
            data-aos="fade-left"
          >
            <a href={ministry?.heroDetails?.button_link}>
              <button className="bg-green-500 p-3 rounded-lg hover:bg-green-700 text-white font-bold">
                {ministry?.heroDetails?.button_text}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
