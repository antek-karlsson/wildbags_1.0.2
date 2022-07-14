import { IconButton } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const CartIcon = () => {
  return <IconButton icon={<FiShoppingCart />} fontSize={"1.5rem"} />;
};

export default CartIcon;
