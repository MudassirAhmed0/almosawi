import useVideoData from "./useVideoData";

export interface Video {
  url: string;
  Title: string;
}

interface Videos {
  id: number;
  attributes: Video;
}

const useVideos = () => useVideoData<Videos>("/mjalis-yts?filters\readers=1");

export default useVideos;
