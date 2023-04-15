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
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import { Platform } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { BsSearch } from "react-icons/bs";
import Filters from "./components/Filters";
import "./App.css";
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  ordering: string;
}

const App = () => {
  return <div></div>;
};

export default App;
