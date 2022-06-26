import { useCallback } from "react";
import useParamsApi from "./useParamsAPI";

const useAccessGet = (props) => {
  const { get, loading, response } = useParamsApi("/api/access");

  return [
    useCallback(
      (setData) => {
        get("").then((data) => {
          setData(response.ok ? data : null);
        });
      },
      [response, get]
    ),
    loading,
  ];
};

export default useAccessGet;
