import { Link as RRLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

const NavLink = ({ to, label }) => {
  return (
    <Flex justify={["flex-start", "space-between"]}>
      <Link as={RRLink} to={to} id="amatic-header" fontSize={"1.5rem"}>
        {label}
      </Link>
    </Flex>
  );
};

export default NavLink;
