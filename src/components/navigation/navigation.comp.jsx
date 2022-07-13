import { Link as RRLink } from "react-router-dom";
import { HStack, VStack, useDisclosure, Box, Link } from "@chakra-ui/react";
import Logo from "../global/logo.sub-comp";
import NavLinks from "./nav-links.sub-comp";
import ColorModeBtn from "./color-mode-btn.sub-comp";
import MenuToggleBtn from "./menu-toggle-btn.sub-comp";
import CartIcon from "./cart-icon.sub-comp";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box p={4}>
        <VStack>
          <ColorModeBtn />
          <Link as={RRLink} to="/">
            <Logo boxSize={"10rem"} />
          </Link>
          <HStack w={"100%"} justify={["space-between", "center"]} p={"4"}>
            <MenuToggleBtn isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <CartIcon />
          </HStack>
          <NavLinks isOpen={isOpen} />
        </VStack>
      </Box>
    </>
  );
};

export default Navigation;
