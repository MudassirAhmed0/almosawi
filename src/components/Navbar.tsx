import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      paddingY={"10px"}
      paddingX={"24px"}
      gap={5}
    >
      {/* <Image src={logo} boxSize={"40px"} /> */}
      {/* <HStack> */}
      <Text whiteSpace="nowrap" fontSize={"2xl"} fontWeight={700}>
        قناة مسجد الموسوي الكبير
      </Text>
      <SearchBox />
      <Box>
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};

export default Navbar;
