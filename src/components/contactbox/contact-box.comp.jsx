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
} from "@chakra-ui/react";

import { FiUser, FiMail } from "react-icons/fi";

import contactbox from "../../assets/images/home_images/contactbox.jpg";

const Contactbox = () => {
  const form = useRef();
  return (
    <Stack bg={"teal.500"} p={8} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <VStack>
          <FormControl isRequired>
            <FormLabel>Imię</FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiUser />} />
              <Input />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiMail />} />
              <Input />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Temat</FormLabel>
            <InputGroup>
              <InputLeftElement children={<FiUser />} />
              <Input />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Wiadomość</FormLabel>
            <Textarea />
          </FormControl>
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
