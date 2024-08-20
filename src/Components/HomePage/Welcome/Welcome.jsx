
const InfoCard = ({ title, imgSrc, subtitle, description }) => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-[700px]">
    <p className="text-4xl">{title}</p>
    <div className="rounded-lg w-[600px] h-[400px] overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <p className="text-[20px] font-semibold">{subtitle}</p>
    <p>{description}</p>
    <button className="bg-green-500 hover:bg-green-800 text-white font-bold">
      Read More
    </button>
  </div>
);

export const Welcome = () => {
  const trimDescription = (text) => {
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  const infoData = [
    {
      title: "About Us",
      imgSrc:
        "https://etransport.enugustate.gov.ng/storage/images/ministry_image/TB4ygOfpxfFDuoj1U8jLBk8nvDGRaIdyrAuFngji.webp",
      subtitle: "MINISTRY OF TRANSPORT",
      description: trimDescription(
        "To build a world-class, efficient, sustainable and smart transport system."
      ),
    },
    {
      title: "Leadership",
      imgSrc:
        "https://etransport.enugustate.gov.ng/storage/images/commissioner_image/b9XXZJNWzErVXQMKs2LjQw1Y0NL1Bx6FbJWYVnaM.jpg",
      subtitle: "MINISTRY OF TRANSPORT",
      description: trimDescription(
        "Dr. Obi Ozor is the current Enugu State Commissioner of Transport. A patriotic Nigerian, entrepreneur, and innovative leader with years of extensive experience leading Kobo360, one of the fastest-growing African logistics and supply chain powerhouse, worth $600 million, impacting 700 businesses, transporting 10 billion Kg of cargo,  and creating over 300,000 jobs directly and indirectly in 16 countries."
      ),
    },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="container flex flex-col gap-14 items-center justify-center p-20">
        <p className="text-green-800 text-5xl font-bold">Welcome!</p>
        <div className="flex justify-center gap-20">
          {infoData.map((info, index) => (
            <InfoCard
              key={index}
              title={info.title}
              imgSrc={info.imgSrc}
              subtitle={info.subtitle}
              description={info.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
