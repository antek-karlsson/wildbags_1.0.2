import { IconButton } from "@chakra-ui/react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";

const MenuToggleBtn = ({ toggleIsOpen, isOpen }) => {
  return (
    <IconButton
      bg="transparent"
      fontSize="2rem"
      display={["block", "none"]}
      onClick={toggleIsOpen}
      icon={isOpen ? <MdOutlineClose /> : <MdOutlineMenu />}
    />
  );
};

export default MenuToggleBtn;
