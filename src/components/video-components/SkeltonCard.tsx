import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeltonCard = () => {
  return (
    <Card rounded={"10px"} overflow={"hidden"}>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeltonCard;
