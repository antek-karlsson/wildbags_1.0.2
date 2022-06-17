import { Stack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import infobox_1 from "../../assets/images/home_images/infobox_1.png";

const Infobox1 = () => {
  return (
    <Stack p={16} direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt={"infobox_1"}
          objectFit={"cover"}
          src={infobox_1}
          borderRadius={"2xl"}
        />
      </Flex>
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text>Info</Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Wszystkie produkty , które tu zobaczysz stworzone są zgodnie z ideą
            #upcykling , czyli zmniejszeniem zużycia surowców naturalnych oraz
            wytwarzanych odpadów poprzez tworzenie produktów z materiałów z
            drugiej ręki o wyższej wartości niż pojedyncze tworzywo użyte do
            stworzenia danej rzeczy.
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            To rędzieło, które powstaje z ciągłych poszukiwań oryginalnych
            materiałów z drugiego obiegu i jest kreatywnie przekształcane w
            zupełnie nową rzecz.
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Infobox1;
