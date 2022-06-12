import {
  Flex,
  VStack,
  Stack,
  Text,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import hero_img from "../../assets/images/home_images/hero_img.jpg";

const Hero = () => {
  return (
    <Flex
      bgImage={hero_img}
      w={"100vw"}
      h={"90vh"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"100%"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.500, blackAlpha.500)"}
      >
        <Stack maxW={"2xl"} align={"center"} justify={"center"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            ODKRYJ ABSOLUTNIE NIEPOSPOLITY ŚWIAT UPCYCLINGU I NOŚ SIĘ WYJĄTKOWO!
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
