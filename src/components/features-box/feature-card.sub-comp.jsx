import { Image, VStack, Text } from "@chakra-ui/react";

const FeatureCard = ({ src, label }) => {
  return (
    <VStack justify={"center"} align={"center"} p={2}>
      <Image src={src} borderRadius={"full"} maxW={"50%"} />
      <Text p={4} fontWeight={"bold"}>
        {label}
      </Text>
    </VStack>
  );
};

export default FeatureCard;
