import { atom } from "recoil";
import { Categories, Category } from "../hooks/useCategories";
import { Tag, Tags } from "../hooks/useTags";
import { Artist, Artists } from "../hooks/useArtists";

export interface VideoQuery {
  category: Categories | null;
  tag: Tags | null;
  artist: Artists | null;
}

export const videoQueryState = atom({
  key: "videoQueryState",
  default: {} as VideoQuery,
});
