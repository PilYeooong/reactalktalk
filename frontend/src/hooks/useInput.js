import { useState, useCallback } from 'react';

export default (init = '') => {
  const [value, setValue] = useState(init);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, setValue, handler];
}