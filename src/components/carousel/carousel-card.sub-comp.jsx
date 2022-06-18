import { VStack, Image, Text } from "@chakra-ui/react";

const CarouselCard = ({ imgSrc, prodName, prodPrice }) => {
  return (
    <VStack
      justify={"center"}
      align={"center"}
      border={"1px solid teal"}
      borderRadius={"3xl"}
    >
      <Image src={imgSrc} p={6} borderRadius={"lg"} />
      <VStack px={6} pb={6}>
        <Text>{prodName}</Text>
        <Text>{prodPrice}</Text>
      </VStack>
    </VStack>
  );
};

export default CarouselCard;
