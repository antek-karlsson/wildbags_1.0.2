import { Link, Link as RRLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const NavLink = ({ to, label }) => {
  return (
    <Flex justify={["flex-start", "space-between"]}>
      <Link
        as={RRLink}
        to={to}
        px={2}
        py={1}
        color={"teal"}
        _hover={{
          color: "white",
          bg: "teal",
        }}
      >
        {label}
      </Link>
    </Flex>
  );
};

export default NavLink;
