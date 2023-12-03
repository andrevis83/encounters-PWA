import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useNavbar = () => {
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

  return { currentRoute, handleChange };
};
