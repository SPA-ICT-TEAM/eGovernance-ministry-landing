import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

import load from "../../../assets/images/loading.gif";
import logo from "../../../assets/images/logo.png";
import Footer from "../../Footer/Footer";

const ProjectCard = ({ imgSrc, title, description, id }) => { // Add id prop
  const navigate = useNavigate(); // Initialize useNavigate

  const handleReadMore = () => {
    navigate(`/project/${id}`); // Navigate to project/:id
  };

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
        <button 
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" 
          onClick={handleReadMore} // Add onClick handler
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export const Project = () => {
  const { ministry, loading, error } = useContext(UserContext);
  const projects = ministry?.projects;

  useEffect(() => {
    }, [ministry]);

  if (loading) {
      return 'Loading...'
  }

  return (
    <>
    <section id="MainContent" className="flex items-center justify-center bg-gray-100">
      <div className="container flex flex-col gap-14 items-center justify-center p-20">
        <div className="max-w-[800px] flex flex-col items-center gap-6">
          <p className="text-green-800 text-5xl font-bold">Our Projects</p>
          <p className="text-center text-gray-500 text-[18px]">
            Explore a selection of our latest and greatest projects. Each one
            showcases our commitment to innovation and design excellence.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {(projects && projects.length > 0) && projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.image_path}
              title={project.name}
              description={project.description}
              id={project.id} // Pass project id
            />
          ))}
          {(!projects || projects.length === 0) && (
            <div>
              <img src={load} alt="loading..." /> {/* Use the imported loading image */}
            </div>
          )}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};
