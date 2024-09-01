import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

const useMatchPath = (path: string = '/') => {
  const { pathname } = useLocation();

  return useMemo(() => Boolean(matchPath(pathname, path)), [path, pathname]);
};

export default useMatchPath;
