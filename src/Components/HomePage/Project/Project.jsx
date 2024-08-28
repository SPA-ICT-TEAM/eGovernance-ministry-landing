const ProjectCard = ({ imgSrc, title, description }) => {
  const trimDescription = (text) => {
    return text.length > 10 ? text.substring(0, 100) + "..." : text;
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden flex flex-col justify-center max-w-[300px] min-h-[300px]">
      <div className="max-w-[300px]">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="p-5 flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-[20px] font-semibold">{title}</p>
          <p className="text-gray-400 text-center">
            {trimDescription(description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Project = ({ projects }) => {
  

  return (
    <section className="flex items-center justify-center bg-gray-100">
      <div className="container flex flex-col gap-14 items-center justify-center p-20">
        <div className="max-w-[800px] flex flex-col items-center gap-6">
          <p className="text-green-800 text-5xl font-bold">Our Projects</p>
          <p className="text-center text-gray-500 text-[18px]">
            Explore a selection of our latest and greatest projects. Each one
            showcases our commitment to innovation and design excellence.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.image_path}
              title={project.name}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
