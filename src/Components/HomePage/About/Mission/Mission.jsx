const InfoCard = ({ title, description }) => (
    <div className="flex flex-col py-10 px-5 gap-8 mx-4 w-full bg-green-600 rounded-lg text-white">
      <p className="text-3xl text-center">{title}</p>
      <p className="text-center" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );

  export const Mission = ({ mission, vision}) => {
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
      <section className="py-20 px-8 pb-20 sm:px10 w-full flex items-center">
        <div className="container mx-auto flex flex-col md:flex-row w-full justify-between px-2 md:px-6 gap-8">
            <InfoCard title="Our Mission" description={mission} />
            <InfoCard title="Our Vision" description={vision} />
        </div>
      </section>
    );
  }
