import { IconButton, useColorMode } from "@chakra-ui/react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";

const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      alignSelf={"flex-end"}
      colorScheme={"teal"}
      icon={
        colorMode === "light" ? <MdOutlineNightlight /> : <MdOutlineWbSunny />
      }
      isRound="true"
      onClick={toggleColorMode}
      fontSize={"1.5rem"}
    />
  );
};

export default ColorModeBtn;
