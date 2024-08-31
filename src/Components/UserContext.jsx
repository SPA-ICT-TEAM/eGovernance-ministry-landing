/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DomainContext } from './DomainContext';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [ministry, setMinistry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { domain, domainError, domainLoading } = useContext(DomainContext);

  useEffect(() => {
    let url; 

    if(!domainLoading) {

      const baseUrl = (!domain.includes('localhost')) ? domain : 'https://staging-etransport.enugustate.gov.ng';
      url = `${baseUrl}/api/public/ministry`;
    }

    const fetchMinistry = async (url) => {
      try {
        // console.log('url',url);
        const response = await axios.get(url);
        // console.log(response);
        setMinistry(response.data);
      } catch (err) {
        // console.log('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if(!domainLoading) fetchMinistry(url);
  }, [domain]);

  return (
    <UserContext.Provider value={{ ministry, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};


