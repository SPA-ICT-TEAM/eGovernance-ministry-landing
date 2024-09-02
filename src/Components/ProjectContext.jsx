/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from 'react';

import axios from 'axios';
import { DomainContext } from './DomainContext';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  const [id, setId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { domain, domainError, domainLoading } = useContext(DomainContext);
  // if(!domainLoading) {
  //   // console.log('domain loading', domainLoading);
  //   const baseUrl = (!domain.includes('localhost')) ? domain : 'https://staging-etransport.enugustate.gov.ng';
  //   const url = `${baseUrl}/ministry/projects/${id}`
  // }

  useEffect(() => {
    let url;

    if(!domainLoading) {
      domain = `https://${domain}`;
      const baseUrl = (!domain.includes('localhost')) ? domain : 'https://etransport.enugustate.gov.ng';
      url = `${baseUrl}/api/public/ministry/projects/${id}`;
    }

    const fetchProject = async (url) => {
      try {
        const response = await axios.get(url);
        // console.log('project:',response);
        setProject(response.data.project);
      } catch (err) {
        // console.log('error:',err.response.data);
        if(err.response) setError(err.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchProject(url);
  }, [id, domain]); // Added dependencies to re-fetch when id or domain changes

  return (
    <ProjectContext.Provider value={{ project, loading, error, setId }}>
      {children}
    </ProjectContext.Provider>
  );
};


