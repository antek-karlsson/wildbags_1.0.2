import { Stack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import infobox_2 from "../../assets/images/home_images/infobox_2.png";

const Infobox2 = () => {
  return (
    <Stack bg={"teal.500"} p={16} direction={{ base: "column", md: "row" }}>
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Text>
              Chciałabyś mieć wyjątkową torbę lub kosmetyczkę z wymarzonego
              materiału w ulubionym kolorze?
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Napisz do mnie - dogramy wspólnie szczegóły :)
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            wildbags@wildbags.pl
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"infobox_1"}
          objectFit={"cover"}
          src={infobox_2}
          borderRadius={"2xl"}
        />
      </Flex>
    </Stack>
  );
};

export default Infobox2;
