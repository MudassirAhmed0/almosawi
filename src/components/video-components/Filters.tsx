import { Box, HStack, Heading, Stack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { GameQuery } from "../../App";
import BadgesFilter from "./BadgesFilter";
import SearchBox from "./SearchBox";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const Filters = ({ gameQuery, setGameQuery }: Props) => {
  return (
    <>
      <Stack marginY={5} gap={5}>
        <HStack paddingX={4} gap={2} justifyContent={"space-between"}>
          {/* <SearchBox /> */}
          <Heading fontSize={"5xl"}>أشرطة فيديو</Heading>
          <Box>
            <SortSelector />
          </Box>
        </HStack>
        <HStack
          paddingX={{ md: 4 }}
          mr={{ base: "auto" }}
          justifyContent={"space-between"}
          marginTop={8}
        >
          <BadgesFilter />
        </HStack>
      </Stack>
    </>
  );
};

export default Filters;
