import { useState, useCallback } from "react";

const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (httpConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpConfig.url, {
        method: httpConfig.method ? httpConfig.method : "GET",
        headers: httpConfig.headers ? httpConfig.headers : {},
        body: httpConfig.body ? JSON.stringify(httpConfig.body) : null,
      });

      if (response !== null && !response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};

export default useHttpRequest;
