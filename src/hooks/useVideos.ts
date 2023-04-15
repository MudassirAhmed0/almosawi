import { useRecoilState } from "recoil";
import useVideoData from "./useVideoData";
import { videoQueryState } from "../atoms/videoQueryAtom";

export interface Video {
  url: string;
  Title: string;
}

interface Videos {
  id: number;
  attributes: Video;
}

const useVideos = (queryString: string) => {
  return useVideoData<Videos>(
    `/mjalis-yts?${queryString}`,
    queryString
      ? queryString
      : "final argument and first should be same so after changing its string so before also it should be string"
  );
};

export default useVideos;
