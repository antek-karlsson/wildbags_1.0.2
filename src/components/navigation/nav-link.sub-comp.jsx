import { Link as RRLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

const NavLink = ({ to, label }) => {
  return (
    <Flex justify={["flex-start", "space-between"]}>
      <Link
        as={RRLink}
        to={to}
        px={8}
        py={2}
        borderRadius={"lg"}
        color={"teal"}
        _hover={{
          color: "white",
          bg: "linear-gradient(45deg, rgba(49,151,149,1) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        {label}
      </Link>
    </Flex>
  );
};

export default NavLink;
