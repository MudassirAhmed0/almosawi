import useVideoData from "./useVideoData";

export interface Tag {
  Name: string;
}

export interface Tags {
  id: number;
  attributes: Tag;
}

const useTags = () => useVideoData<Tags>("/tags?populate=*");
export default useTags;
