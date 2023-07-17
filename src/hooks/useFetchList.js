import { useEffect, useState } from "react";

export const useFetchList = ({ fetchDataFunction = () => {} }) => {
  const [isLoading, setLoading] = useState(false);
  const [entities, setEntities] = useState([]);
  const [errorState, setErrorState] = useState({
    hasError: false,
  });

  const handleError = (error) => {
    setErrorState({
      hasError: true,
      message: error.message,
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchDataFunction()
      .then((res) => {
        const apiData = res;
        setEntities(apiData);
        setLoading(false);
        setErrorState({
          hasError: false,
        });
      })
      .catch((err) => {
        setLoading(false);
        handleError(err);
      });
  }, [fetchDataFunction]);

  return { entities, isLoading, errorState };
};
