const InfoCard = ({ title, description }) => (
    <div className="flex flex-col p-6 gap-4 max-w-[500px] bg-green-600 rounded-lg text-white">
      <p className="text-3xl text-center">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  );
  
  export const Mission = () => {
    const info = [
      {
        title: "Our Mission",
        description: "To leverage transportation as a key catalyst for the economic transformation of Enugu State and the broader Southeast region, extending our impact into neighbouring Central Africa. Achieving this necessitates adopting a multimodal transport system, leveraging innovation and technology through smart transport solutions and establishing a world-class, efficient traffic management system to support this transformation."
      },
      {
        title: "Our Vision",
        description: "To build a world-class, efficient, sustainable and smart transport system."
      }
    ];
  
    return (
      <section className="p-20 flex items-center justify-center">
        <div className="container flex w-full justify-between px-36">
          {info.map((item, index) => (
            <InfoCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </section>
    );
  }
  