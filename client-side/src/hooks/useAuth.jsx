import { useState } from 'react';
import axios from '../api';

const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (...args) => {
    try {
      setLoading(true);
      const result = await apiFunc(...args);
      setData(result);
      setError(null);
      return result;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
};

export default useApi;
