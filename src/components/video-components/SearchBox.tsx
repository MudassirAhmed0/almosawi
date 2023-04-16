import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        left={"0.5rem"}
        children={<BsSearch color="gray.300" />}
      />
      <Input
        rounded={"18px"}
        paddingRight={5}
        type="Text"
        placeholder="ابحث هنا..."
      />
    </InputGroup>
  );
};

export default SearchBox;
