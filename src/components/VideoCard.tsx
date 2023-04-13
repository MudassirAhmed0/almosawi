import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import CardIconList from "./CardIconList";
import CriticBadge from "./CriticBadge";
import getCroppedImageUrl from "../services/image-url";
import { Video } from "../hooks/useVideos";

interface Props {
  video: Video;
}
const VideoCard = ({ video }: Props) => {
  return (
    <Card overflow={"hidden"}>
      <iframe
        src={`https://www.youtube.com/embed/${video.url}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
        frameBorder="0"
        style={{ height: "150px" }}
      ></iframe>
      <CardBody>
        <Heading fontSize={"2xl"}>{video.Title}</Heading>
        {/* <HStack justify={"space-between"}>
          <CardIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticBadge score={game.metacritic} />
        </HStack> */}
      </CardBody>
    </Card>
  );
};

export default VideoCard;
