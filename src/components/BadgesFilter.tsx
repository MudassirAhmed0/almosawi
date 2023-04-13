import { Badge, Stack } from "@chakra-ui/react";
import React from "react";
import useTags from "../hooks/useTags";

const BadgesFilter = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const { data: tags } = useTags();
  return (
    <Stack direction="row">
      {tags.map((tag) => (
        <Badge
          key={tag.id}
          paddingX={"1.5rem"}
          paddingY={"0.4rem"}
          rounded={"18px"}
          // colorScheme=""
        >
          {tag.attributes.Name}
        </Badge>
      ))}
    </Stack>
  );
};

export default BadgesFilter;
