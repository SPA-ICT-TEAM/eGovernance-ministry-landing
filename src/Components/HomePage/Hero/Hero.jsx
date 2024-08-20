export const Hero = () => {
  return (
    <section className="flex items-center justify-center">
      <div className="relative p-24 bg-[url('https://etransport.enugustate.gov.ng/storage/images/hero/JiDIVDRSed71s78XjiKpS5mZ0EAhuNW80GuQYySg.jpg')] w-full max-w-[1700px] bg-cover bg-center pb-48 pt-36 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col gap-6 container pb-16">
          <p className="text-5xl font-bold max-w-[550px]">
            Seamlessly Linking Ndi-Enugu!
          </p>
          <p className="text-[18px]">
            Building a sustainable transport system in Enugu
          </p>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
