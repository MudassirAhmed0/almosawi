import { Badge, Stack } from "@chakra-ui/react";
import useTags from "../hooks/useTags";
import { useRecoilState } from "recoil";
import { videoQueryState } from "../atoms/videoQueryAtom";

const BadgesFilter = () => {
  const { data: tags } = useTags();
  const [videoQuery, setVideoQuery] = useRecoilState(videoQueryState);
  const selectedTag = videoQuery.tag;
  return (
    <Stack
      direction="row"
      overflow={"scroll"}
      width={{ base: "95vw", md: "auto" }}
      className="hideScroll"
      paddingBottom={2}
      mr={{ base: "auto", md: "0" }}
    >
      {tags.map((tag) => (
        <Badge
          key={tag.id}
          paddingX={"1.5rem"}
          paddingY={"0.4rem"}
          rounded={"18px"}
          variant={
            selectedTag?.attributes?.Name == tag.attributes.Name
              ? "solid"
              : "outline"
          }
          cursor={"pointer"}
          onClick={() => setVideoQuery({ ...videoQuery, tag })}
          // colorScheme=""
        >
          {tag.attributes.Name}
        </Badge>
      ))}
    </Stack>
  );
};

export default BadgesFilter;
