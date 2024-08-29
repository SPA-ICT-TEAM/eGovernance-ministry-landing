/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ministry, setMinistry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMinistry = async () => {
      try {
        const response = await axios.get('https://staging-etransport.enugustate.gov.ng/api/ministry');
        console.log(response.data.services.services);
        setMinistry(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMinistry();
  }, []);

  return (
    <UserContext.Provider value={{ ministry, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};


