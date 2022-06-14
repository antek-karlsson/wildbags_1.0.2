import { Image, VStack, Text } from "@chakra-ui/react";

const FeatureCard = ({ src, label }) => {
  return (
    <VStack justify={"center"} align={"center"}>
      <Image src={src} borderRadius={"full"} />
      <Text>{label}</Text>
    </VStack>
  );
};

export default FeatureCard;
