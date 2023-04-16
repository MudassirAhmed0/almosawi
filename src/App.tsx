import {
  Box,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/video-components/Navbar";
import GameGrid from "./components/video-components/GameGrid";
import GenreList from "./components/video-components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/video-components/PlatformSelector";
import SortSelector from "./components/video-components/SortSelector";
import { BsSearch } from "react-icons/bs";
import Filters from "./components/video-components/Filters";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
}

const App = () => {
  return <div></div>;
};

export default App;
