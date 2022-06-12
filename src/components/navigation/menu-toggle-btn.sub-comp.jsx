import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MenuToggleBtn = ({ isOpen, onOpen, onClose }) => {
  return (
    <IconButton
      colorScheme={"teal"}
      fontSize={"1.5rem"}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label={"Open Menu"}
      display={{ sm: "none" }}
      onClick={isOpen ? onClose : onOpen}
    />
  );
};

export default MenuToggleBtn;
