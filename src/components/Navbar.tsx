import { Box, HStack, Show, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      paddingY={"10px"}
      paddingX={{ base: "10px", md: "24px" }}
      gap={5}
    >
      {/* <Image src={logo} boxSize={"40px"} /> */}
      {/* <HStack> */}
      <Link to="/">
        <Text
          whiteSpace="nowrap"
          fontSize={{ base: "22px", md: "2xl" }}
          fontWeight={700}
        >
          قناة مسجد الموسوي الكبير
        </Text>
      </Link>
      <Show above="md">
        <SearchBox />
      </Show>
      <Box>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default Navbar;
