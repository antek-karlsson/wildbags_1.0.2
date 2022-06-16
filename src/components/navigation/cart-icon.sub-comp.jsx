import { IconButton } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const CartIcon = () => {
  return (
    <IconButton
      colorScheme={"teal"}
      icon={<FiShoppingCart />}
      // bg={"transparent"}
      fontSize={"1.5rem"}
    />
  );
};

export default CartIcon;
