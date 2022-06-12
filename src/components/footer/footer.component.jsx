import { Box, IconButton, Stack } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Logo from "../global/logo.sub-comp";

const Footer = () => {
  return (
    <Stack display="flex" direction={["column", "row"]}>
      <Box w={"5rem"}>
        <Logo />
      </Box>
      <IconButton icon={<FiMail />} />
      <IconButton icon={<FaInstagram />} />
    </Stack>
  );
};

export default Footer;
