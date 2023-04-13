import { Box, Button, HStack, ListItem } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenre";
import { Artist } from "../hooks/useArtists";
import { Category } from "../hooks/useCategories";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  artist: Artist;
  //   onSelect: (genre: Genre) => void;
  selectedArtist: Artist | null;
}

const ArtistsListItem = ({ artist, selectedArtist }: Props) => {
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
          fontWeight={artist.Name == selectedArtist?.Name ? "bold" : "normal"}
          fontSize={"lg"}
          variant="link"
          whiteSpace="normal"
          textAlign="right"
          //   onClick={() => onSelect(genre)}
        >
          {" "}
          {artist.Name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default ArtistsListItem;
