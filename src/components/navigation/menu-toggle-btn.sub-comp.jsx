import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const MenuToggleBtn = ({ isOpen, onOpen, onClose }) => {
  return (
    <IconButton
      fontSize={"1.5rem"}
      icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
      aria-label={"Open Menu"}
      display={{ sm: "none" }}
      onClick={isOpen ? onClose : onOpen}
      background={"blackAlpha.900"}
      color={"whiteAlpha.900"}
      _hover={{
        background: "whiteAlpha.900",
        color: "blackAlpha.900",
        border: "1px solid black",
      }}
    />
  );
};

export default MenuToggleBtn;
