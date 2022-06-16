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

import { FiMail } from "react-icons/fi";

const CopyBtn = ({ copyValue, copyLabel, icon }) => {
  const [value, setValue] = useState(copyValue);
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <Tooltip
            label={hasCopied ? `${copyLabel} Copied!` : `Copy ${copyLabel}`}
            hasArrow
            closeOnClick={false}
          >
            <IconButton
              value={value}
              icon={icon}
              onClick={onCopy}
              colorScheme={"teal"}
            />
          </Tooltip>
        </Box>
      </PopoverTrigger>
      <PopoverContent
        color={"white"}
        bg={"teal.500"}
        borderColor={"teal.500"}
        textAlign={"center"}
      >
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
