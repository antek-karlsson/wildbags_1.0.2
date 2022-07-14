import { IconButton, useColorMode } from "@chakra-ui/react";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      alignSelf={"flex-end"}
      icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
      isRound="true"
      onClick={toggleColorMode}
      fontSize={"1.5rem"}
    />
  );
};

export default ColorModeBtn;
