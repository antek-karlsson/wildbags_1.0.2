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
            <IconButton value={value} icon={icon} onClick={onCopy} />
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
