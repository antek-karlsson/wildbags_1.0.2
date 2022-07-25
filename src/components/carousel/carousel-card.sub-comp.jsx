import { VStack, Image, Text } from "@chakra-ui/react";

const CarouselCard = ({ imgSrc, prodName, prodPrice }) => {
  return (
    <VStack justify={"center"} align={"center"}>
      <Image src={imgSrc} p={6} borderRadius={"lg"} />
      <VStack px={6} pb={6}>
        <Text id="amatic-paragraph" fontSize={"1.5rem"}>
          {prodName}
        </Text>
        <Text id="amatic-paragraph" fontSize={"1.5rem"}>
          {prodPrice}
        </Text>
      </VStack>
    </VStack>
  );
};

export default CarouselCard;
