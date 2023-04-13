import useVideoData from "./useVideoData";

export interface Tag {
  Name: string;
}

interface Tags {
  id: number;
  attributes: Tag;
}

const useTags = () => useVideoData<Tags>("/tags?populate=*");
export default useTags;
