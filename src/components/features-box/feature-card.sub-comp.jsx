import { Image, VStack, Text } from "@chakra-ui/react";

const FeatureCard = ({ src, label }) => {
  return (
    <VStack justify={"center"} align={"center"} p={2} textAlign={"center"}>
      <Image src={src} borderRadius={"full"} maxW={"10rem"} />
      <Text p={4} id="amatic-header" fontSize={"1.5rem"}>
        {label}
      </Text>
    </VStack>
  );
};

export default FeatureCard;
