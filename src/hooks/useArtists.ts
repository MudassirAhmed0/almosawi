import useVideoData from "./useVideoData";

export interface Artist {
  Name: string;
}

export interface Artists {
  id: number;
  attributes: Artist;
}
const useArtists = () => useVideoData<Artists>("/readers?populate=*");
export default useArtists;
