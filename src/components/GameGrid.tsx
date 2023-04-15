import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import SkeltonCard from "./SkeltonCard";
import { GameQuery } from "../App";
import useVideos from "../hooks/useVideos";
import VideoCard from "./VideoCard";
import { useRecoilState } from "recoil";
import { videoQueryState } from "../atoms/videoQueryAtom";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, loading } = useGames(gameQuery);
  // const { data: artist } = useArtists();
  // const { data: tags } = useTags();
  const [videoQuery] = useRecoilState(videoQueryState);

  let artistQuery: string = "";
  let typesQuery: string = "";
  let tagsQuery: string = "";
  if (videoQuery.tag) {
    tagsQuery = `filters[tags]=${videoQuery.tag.id}`;
  }
  if (videoQuery.category) {
    typesQuery = `filters[types]=${videoQuery.category.id}${
      tagsQuery ? "&" : ""
    }`;
  }
  if (videoQuery.artist) {
    artistQuery = `filters[readers]=${videoQuery.artist.id}${
      typesQuery ? "&" : tagsQuery ? "&" : ""
    }`;
  }

  const queryString = artistQuery + typesQuery + tagsQuery;
  const {
    data: videos,
    loading: videosLoading,
    error: videosError,
  } = useVideos(queryString);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && error}

      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} gap={10}>
        {videosLoading && skeletons.map((i) => <SkeltonCard key={i} />)}
        {/* {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))} */}
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            videoId={video.id}
            video={video.attributes}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
