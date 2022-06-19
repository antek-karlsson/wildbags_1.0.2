import { useRef } from "react";

import emailjs from "@emailjs/browser";

import {
  Stack,
  Flex,
  Heading,
  Text,
  Image,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  VStack,
  Textarea,
  Button,
} from "@chakra-ui/react";

import { FiUser, FiMail } from "react-icons/fi";
import { RiQuestionMark } from "react-icons/ri";

import contactbox from "../../assets/images/home_images/contactbox.jpg";

const Contactbox = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uyl801f",
        "template_idkarqs",
        form.current,
        "T1pppy2gD3XZ8hodV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Stack
      bg={"teal.500"}
      p={{ base: 6, md: 12, lg: 16 }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={4} flex={1} align={"center"} justify={"center"}>
        <VStack
          w={["100%", "100%", "80%"]}
          as={"form"}
          ref={form}
          onSubmit={sendEmail}
          spacing={8}
        >
          <Heading>Kontaktuj się!</Heading>
          <FormControl isRequired>
            <FormLabel>Imię</FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiUser />} />
              <Input type={"text"} id={"name"} name={"name"} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiMail />} />
              <Input type={"email"} id={"email"} name={"email"} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Temat</FormLabel>
            <InputGroup>
              <InputLeftElement children={<RiQuestionMark />} />
              <Input type={"text"} id={"subject"} name={"subject"} />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Wiadomość</FormLabel>
            <Textarea id={"message"} name={"message"} />
          </FormControl>
          <Button
            value={"send"}
            w={"100%"}
            size={"lg"}
            type={"submit"}
            colorScheme={"pink"}
          >
            Wyślij
          </Button>
        </VStack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"infobox_1"}
          objectFit={"cover"}
          src={contactbox}
          borderRadius={"2xl"}
        />
      </Flex>
    </Stack>
  );
};

export default Contactbox;
