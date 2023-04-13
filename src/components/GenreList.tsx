import { Heading, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenre";
import ArtistsListItem from "./ArtistListItem";
import useArtists from "../hooks/useArtists";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data: genres, error, loading } = useGenres();
  const { data: artists } = useArtists();

  return (
    <>
      <Heading fontSize={"3xl"} marginBottom={2}>
        الفنانين
      </Heading>
      <List>
        {/* {genres.map((genre) => (
        <GenreListItem
        selectedGenre={selectedGenre}
          onSelect={onSelect}
          key={genre.id}
          genre={genre}
          />
        ))} */}
        {artists.map((artist) => (
          <ArtistsListItem
            selectedArtist={null}
            key={artist.id}
            artist={artist.attributes}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
