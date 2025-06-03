import { useEffect, useState } from 'react';
import useApi from '../use-api';

export const useUsers = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await useApi.get('/user');
        setUsers(res.data.data);
      } catch (err) {
        console.error('Auth error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { users, loading };
};
