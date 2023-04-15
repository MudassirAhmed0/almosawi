import React from "react";
import { useParams } from "react-router-dom";
import useVideo from "../hooks/useVideo";
import VideoCard from "../components/VideoCard";
import { Video } from "../hooks/useVideos";
import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  Text,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
const VideoDetail = () => {
  const { videoId } = useParams();
  const { data } = useVideo(videoId as string);
  //   console.log(data[0].attributes);
  console.log(data?.attributes);
  console.log(data);
  return (
    <>
      <Box px={"5%"}>
        <Navbar />
      </Box>
      <Box px={"5%"} mt={5} maxHeight={"50vh"}>
        {/* <VideoCard video={data.attributes} /> */}
        <Card overflow={"hidden"}>
          <AspectRatio ratio={{ base: 1 / 0.7, md: 1 / 0.37 }}>
            <iframe
              src={`https://www.youtube.com/embed/${data.attributes?.url}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
              frameBorder="0"
              //   style={{ height: "150px" }}
            ></iframe>
            {/* <Image
          src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
          // height="15.3645833333vw"
          objectFit="cover"
        /> */}
          </AspectRatio>

          <CardBody>
            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              {data?.attributes?.Title}
            </Heading>
            {/* <Text >{data.attributes?.reade}</Text> */}
            {/* <HStack justify={"space-between"}>
          <CardIconList platforms={game.platforms.map((p) => p.platform)} />
          <CriticBadge score={game.metacritic} />
        </HStack> */}
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default VideoDetail;
