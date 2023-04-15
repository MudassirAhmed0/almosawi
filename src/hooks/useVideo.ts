import { useEffect, useState } from "react";
import useVideoData from "./useVideoData";
import { Video } from "./useVideos";
import videoApiClient from "../services/videoApiClient";

interface Videos {
  id?: number;
  attributes?: Video;
}

const useVideo = (videoId: string) => {
  const [data, setData] = useState<Videos>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    videoApiClient
      .get(`/mjalis-yts/${videoId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
      });
  }, [videoId]);
  return { data, error, loading };
};

export default useVideo;
