import React, { useState } from "react";
import { GameQuery } from "../App";
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import GenreList from "../components/GenreList";
import Filters from "../components/Filters";
import GameGrid from "../components/GameGrid";

const VideoList = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      overflow={"hidden"}
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main" ` }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={"16px"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Filters gameQuery={gameQuery} setGameQuery={setGameQuery} />
        <Box paddingX={4}>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default VideoList;
