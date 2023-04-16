import { Heading, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenre";
import ArtistsListItem from "./ArtistListItem";
import useArtists, { Artist, Artists } from "../../hooks/useArtists";
import { useRecoilState } from "recoil";
import { videoQueryState } from "../../atoms/videoQueryAtom";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const [videoQuery, setVideoQuery] = useRecoilState(videoQueryState);
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
            selectedArtist={videoQuery?.artist}
            onSelect={(artist: Artists) => {
              setVideoQuery({ ...videoQuery, artist });
            }}
            key={artist.id}
            artist={artist}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
