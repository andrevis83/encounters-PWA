import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetUsers } from '@hooks/useGetUsers';

export const useNavbar = () => {
  const { users } = useGetUsers();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentRoute, setCurrentRoute] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (currentRoute) {
      return;
    }

    setCurrentRoute(() => location.pathname);
  }, [currentRoute, location]);

  const handleChange = (newRoute: string) => {
    setCurrentRoute(() => newRoute);
    navigate(newRoute);
  };

  return { currentRoute, users, handleChange };
};
