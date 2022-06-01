import { Flex, HStack, Spacer, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.sub-comp";
import NavLinks from "./nav-links.sub-comp";
import ColorModeBtn from "./color-mode-btn.sub-comp";
import MenuToggleBtn from "./menu-toggle-btn.sub-comp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  return (
    <VStack p={4}>
      <ColorModeBtn />
      <VStack>
        <Logo />
        <Spacer />
        <MenuToggleBtn isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
      </VStack>
      <NavLinks isOpen={isOpen} />
    </VStack>
  );
};

export default Navigation;
