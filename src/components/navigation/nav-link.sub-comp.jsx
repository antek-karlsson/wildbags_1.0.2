import { Link, Link as RRLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const NavLink = ({ to, label }) => {
  return (
    <Box>
      <Link as={RRLink} to={to}>
        {label}
      </Link>
    </Box>
  );
};

export default NavLink;
