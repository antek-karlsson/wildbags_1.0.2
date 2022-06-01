import { Box, Stack } from "@chakra-ui/react";
import NavLink from "./nav-link.sub-comp";

const NavLinks = ({ isOpen }) => {
  return (
    <Box display={[isOpen ? "block" : "none", "block"]}>
      <Stack display="flex" direction={["column", "row"]} spacing={8}>
        <NavLink to={"/"} label={"Home"} />
        <NavLink to={"/shop"} label={"Sklep"} />
        <NavLink to={"/about"} label={"O mnie"} />
        <NavLink to={"/custom"} label={"Personalizowane"} />
      </Stack>
    </Box>
  );
};

export default NavLinks;
