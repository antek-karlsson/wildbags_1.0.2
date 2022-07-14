import { VStack, Image, Text, useColorMode } from "@chakra-ui/react";

const CarouselCard = ({ imgSrc, prodName, prodPrice }) => {
  const { colorMode } = useColorMode();
  return (
    <VStack
      justify={"center"}
      align={"center"}
      border={colorMode === "light" ? "1px solid black" : "1px solid white"}
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
