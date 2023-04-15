import React from "react";
import { Game } from "../hooks/useGames";
import {
  AspectRatio,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import CardIconList from "./CardIconList";
import CriticBadge from "./CriticBadge";
import getCroppedImageUrl from "../services/image-url";
import { Video } from "../hooks/useVideos";
import { Link } from "react-router-dom";

interface Props {
  video: Video;
  videoId: number;
}
const VideoCard = ({ video, videoId }: Props) => {
  return (
    <Link to={`video/${videoId}`}>
      <Card overflow={"hidden"}>
        {/* <iframe
          src={`https://www.youtube.com/embed/${video.url}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
          frameBorder="0"
          style={{ height: "150px" }}
        ></iframe> */}
        <AspectRatio ratio={1.76949152542}>
          <Image
            src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
            // height="15.3645833333vw"
            objectFit="cover"
          />
        </AspectRatio>

        <CardBody>
          <Heading fontSize={"2xl"}>{video.Title}</Heading>
          {/* <HStack justify={"space-between"}>
            <CardIconList platforms={game.platforms.map((p) => p.platform)} />
            <CriticBadge score={game.metacritic} />
          </HStack> */}
        </CardBody>
      </Card>
    </Link>
  );
};

export default VideoCard;
