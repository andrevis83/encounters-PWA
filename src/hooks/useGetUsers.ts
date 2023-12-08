import * as React from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';

export const useGetUsers = () => {
  const getTableUsers = useIndexedDB('users');

  const [users, setUsers] = React.useState<User[] | undefined>(undefined);

  const getUsersDb = React.useCallback(async () => {
    try {
      const usersDB: User[] = await getTableUsers.getAll();
      setUsers(() => usersDB);
    } catch (error) {
      console.error(error);
    }
  }, [getTableUsers]);

  React.useEffect(() => {
    if (users !== undefined) {
      return;
    }

    getUsersDb();
  }, [users, getUsersDb]);

  return { users };
};
