const InfoCard = ({ title, imgSrc, subtitle, description }) => (
  <div className="flex flex-col items-center justify-center gap-4 max-w-[700px] w-full">
    <p className="text-4xl text-center md:text-left">{title}</p>
    <div className="rounded-lg w-full h-[200px] md:w-[600px] md:h-[400px] overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col gap-3 self-start w-full px-4 md:px-0">
      <p className="text-[20px] font-semibold">{subtitle}</p>
      <p>{description}</p>
    </div>
    <button className="bg-green-500 p-3 rounded-lg hover:bg-green-800 text-white font-bold self-start">
      Read More
    </button>
  </div>
);

export const Welcome = ({ ministry }) => {
  const trimDescription = (text) => {
    return text.length > 150 ? text.substring(0, 150) + "..." : text;
  };

  console.log("ministry:", ministry);

  return (
    <section className="flex items-center justify-center">
      <div className="container flex flex-col gap-14 items-center justify-center p-10 md:p-20">
        <p className="text-green-800 text-3xl md:text-5xl font-bold">Welcome!</p>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 w-full">

            <InfoCard
              title={ministry.heroDetails.title}
              imgSrc={ministry.heroDetails.hero_image}
              subtitle={ministry.heroDetails.subtitle}
              description="Description"
            />
            <InfoCard
              title={ministry.heroDetails.title}
              imgSrc={ministry.heroDetails.hero_image}
              subtitle={ministry.heroDetails.subtitle}
              description="Description"
            />
        </div>
      </div>
    </section>
  );
};
