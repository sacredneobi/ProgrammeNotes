import { useCallback } from "react";
import useParamsApi from "./useParamsAPI";

const useAuth = (props) => {
  const { post, loading, response } = useParamsApi("/api/auth");

  return [
    useCallback(
      (setData, auth) => {
        post("", auth).then((data) => {
          setData(response.ok ? data : null);
        });
      },
      [response, post]
    ),
    loading,
  ];
};

export default useAuth;
