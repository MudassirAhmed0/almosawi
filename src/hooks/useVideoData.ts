import { useEffect, useState } from "react";
import videoApiClient from "../services/videoApiClient";

interface FetchResponse<T> {
  data: T[];
}

const useVideoData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    videoApiClient
      .get(endpoint)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        console.log(data);
      });
  }, []);
  return { data, error, loading };
};

export default useVideoData;
