import { useEffect } from 'react';

export const useBgLiteBlue = () => {
    useEffect(() => {
      document.body.style.backgroundColor = "liteblue";
      return () => {
        document.body.style.backgroundColor = "";
      }
    }, []);
  }