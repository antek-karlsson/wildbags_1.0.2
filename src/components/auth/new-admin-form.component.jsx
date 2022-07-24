import { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  Stack,
  Button,
  Heading,
  RadioGroup,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { createUserDoc, createUser } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAdmin: false,
};

const NewAdminForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword, isAdmin } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Hasła nie są zgodne!");
      return;
    }
    try {
      const user = await createUser(email, password);
      await createUserDoc(user, { displayName, isAdmin });
      resetFormFields();
      event.target.reset();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Ten adres email jest już w użyciu!");
      } else {
        console.log(err, "Oops! An error occured!");
      }
    }
  };

  console.log(formFields);

  return (
    <form onSubmit={handleSubmit}>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Dodaj administratora
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="displayName" isRequired>
                <FormLabel>Imię</FormLabel>
                <Input type="text" name="displayName" onChange={handleChange} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>e-mail</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Hasło</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Powtórz hasło</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="isAdmin" isRequired>
                <FormLabel>Uprawnienia administratora?</FormLabel>
                <RadioGroup name="isAdmin">
                  <Stack direction={"row"} spacing={5}>
                    <Radio
                      //   name="isAdmin"
                      value={"true"}
                      onChange={handleChange}
                      size={"lg"}
                      colorScheme={"green"}
                    >
                      Tak
                    </Radio>
                    <Radio
                      //   name="isAdmin"
                      value={"false"}
                      onChange={handleChange}
                      size={"lg"}
                      colorScheme={"red"}
                    >
                      Nie
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button type="submit" loadingText="Dodaję..." size="lg">
                  Dodaj
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
};

export default NewAdminForm;
