import { Box, Button, HStack, ListItem } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenre";
import { Artist, Artists } from "../../hooks/useArtists";
import { Category } from "../../hooks/useCategories";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  artist: Artists;
  onSelect: (artist: Artists) => void;
  selectedArtist: Artists | null;
}

const ArtistsListItem = ({ artist, selectedArtist, onSelect }: Props) => {
  return (
    <ListItem paddingY="5px">
      <HStack>
        {/* <Image
          boxSize="32px"
          borderRadius={8}
          objectFit="cover"
          src={getCroppedImageUrl(genre.image_background)}
        /> */}
        <Box marginLeft={1} minWidth={"24px"}>
          <FaUserCircle fontSize={"22px"} />
        </Box>
        <Button
          fontWeight={
            artist?.attributes?.Name == selectedArtist?.attributes?.Name
              ? "bold"
              : "normal"
          }
          textDecoration={
            artist?.attributes?.Name == selectedArtist?.attributes?.Name
              ? "underline"
              : "unset"
          }
          fontSize={"lg"}
          variant="link"
          whiteSpace="normal"
          textAlign="right"
          onClick={() => onSelect(artist)}
        >
          {artist?.attributes?.Name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default ArtistsListItem;
