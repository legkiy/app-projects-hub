import { useEffect, useState } from 'react';

/**
 * Used to check whether a component is mounted or not.xw
 * @returns boolean value
 */
const useCheckMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};
export default useCheckMounted;
