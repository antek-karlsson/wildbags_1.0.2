import {
  Box,
  Flex,
  Stack,
  Link,
  HStack,
  Tooltip,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FiMail, FiPhoneCall, FiInstagram, FiGithub } from "react-icons/fi";
import Logo from "../global/logo.sub-comp";
import CopyBtn from "./copy-btn.sub-comp";

const Footer = () => {
  return (
    <Stack
      display="flex"
      direction={["column", "row"]}
      justify={"space-between"}
      align={"center"}
      p={4}
      borderTop={"1px"}
    >
      <Logo boxSize={"5rem"} />
      <HStack>
        <CopyBtn
          copyValue="wildbags@wildbags.pl"
          copyLabel="E-mail"
          icon={<FiMail />}
        />
        <CopyBtn
          copyValue="+48 537 254 320"
          copyLabel="Phone Number"
          icon={<FiPhoneCall />}
        />
        <Tooltip label={"Check out our Instagram!"} hasArrow>
          <Link
            href="https://www.instagram.com/_wildbags/?hl=pl"
            target="_blank"
          >
            <IconButton colorScheme={"teal"} icon={<FiInstagram />} />
          </Link>
        </Tooltip>
      </HStack>
      <Link href="https://github.com/Hjalmar-K-sson" target={"_blank"}>
        <Button leftIcon={<FiGithub />}>©Hjalmar-K-sson 2022</Button>
      </Link>
    </Stack>
  );
};

export default Footer;
