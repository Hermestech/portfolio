import React, { useState, useEffect, useCallback } from 'react';
export const useAsync = (asyncFunction: any, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState<any>(null);
  const [error, setError] = useState(null);
  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending');
    return asyncFunction()
      .then((response: any) => {
        setError(null);
        setValue(response);
        setStatus('success');
      })
      .catch((error: any) => {
        setValue(null);
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return { execute, status, value, error };
};
