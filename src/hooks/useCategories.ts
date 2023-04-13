import useVideoData from "./useVideoData";

export interface Category {
  Name: string;
}

export interface Categories {
  id: number;
  attributes: Category;
}

const useCategories = () => useVideoData<Categories>("/types?populate=*");

export default useCategories;
