import { IconButton, useColorMode, Box } from "@chakra-ui/react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";

const ColorModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box alignSelf="flex-end">
      <IconButton
        bg="transparent"
        icon={
          colorMode === "light" ? <MdOutlineNightlight /> : <MdOutlineWbSunny />
        }
        isRound="true"
        onClick={toggleColorMode}
      />
    </Box>
  );
};

export default ColorModeBtn;
