const InfoCard = ({ title, imgSrc, subtitle, description }) => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-[700px]">
    <p className="text-4xl">{title}</p>
    <div className="rounded-lg w-[600px] h-[400px] overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-3">

    <p className="text-[20px] font-semibold">{subtitle}</p>
    <p>{description}</p>
    </div>
    <button className="bg-green-500 p-3 rounded-lg hover:bg-green-800 text-white font-bold">
      Read More
    </button>
  </div>
);

export const Welcome = ({ ministry }) => {
  const trimDescription = (text) => {
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  const infoData = [
    {
      title: "About Us",
      imgSrc:
        "https://etransport.enugustate.gov.ng/storage/images/ministry_image/TB4ygOfpxfFDuoj1U8jLBk8nvDGRaIdyrAuFngji.webp",
      subtitle: ministry.ministryDetails.name,
      description: trimDescription(
        "To build a world-class, efficient, sustainable and smart transport system."
      ),
    },
    {
      title: "Leadership",
      imgSrc:
        "https://etransport.enugustate.gov.ng/storage/images/commissioner_image/b9XXZJNWzErVXQMKs2LjQw1Y0NL1Bx6FbJWYVnaM.jpg",
      subtitle: ministry.commissionerDetails.name,
      description: trimDescription(
        ministry.commissionerDetails.biography
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
