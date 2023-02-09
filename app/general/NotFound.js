import React from 'react';
import { RoutePaths } from './RoutePaths';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <h3 className="px-3 py-2 text-lg text-base font-medium">
        Page not found.
      </h3>
      <Button onClick={() => navigate(RoutePaths.HOME)} type="button">
        Go Home
      </Button>
    </div>
  );
};
