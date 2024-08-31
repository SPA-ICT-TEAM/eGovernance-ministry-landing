import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ProjectContext } from "../../ProjectContext";
import { UserContext } from "../../UserContext";
import { TestContext } from "../../TestContext";
import Footer from "../../Footer/Footer";

import load from "../../../assets/images/loading.gif";

export const ViewProject = () => {
    const { project, setId, error, loading } = useContext(ProjectContext);
    const { id } = useParams();
    // if(!loading) console.log(project);

    useEffect(() => {
        setId(id);
    }, [setId]); // Only run when setId changes

    return (
        <>
            <div id="MainContent" className="flex flex-col items-center justify-start h-screen p-5 md:p-10 lg:p-20 w-screen"> 
                {loading ? (
                    <img src={load} alt="Loading..." className="w-1/2 md:w-1/4 lg:w-1/6" /> 
                ) : error ? (
                    <div className="text-bold text-center">{error?.message}</div> 
                ) : (
                    <div className="w-full mt-4 md:mt-8 lg:mt-16"> 
                        <img src={project.image_path} alt={project.name} className="w-full h-auto rounded-lg mb-4 max-h-[60vh]" />
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 my-4">{project.name}</h2> 
                        <div className="border-b border-gray-300 mb-2"></div> 
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg">{project.description}</p> 
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}