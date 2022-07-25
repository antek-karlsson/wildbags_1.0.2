import { useState } from "react";
import {
  Box,
  Tooltip,
  IconButton,
  useClipboard,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";

const CopyBtn = ({ copyValue, copyLabel, icon }) => {
  const [value] = useState(copyValue);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <Tooltip
            label={
              hasCopied ? `Skopiowano ${copyLabel}!` : `Skopiuj ${copyLabel}`
            }
            hasArrow
            closeOnClick={false}
          >
            <IconButton
              value={value}
              icon={icon}
              onClick={onCopy}
              background={"blackAlpha.900"}
              color={"whiteAlpha.900"}
              _hover={{
                background: "whiteAlpha.900",
                color: "blackAlpha.900",
                border: "1px solid black",
              }}
            />
          </Tooltip>
        </Box>
      </PopoverTrigger>
      <PopoverContent textAlign={"center"}>
        <PopoverHeader fontWeight={"bold"} p={2}>
          {copyLabel}
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody p={8}>{copyValue}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CopyBtn;
