import { IconButton } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";

const CartIcon = () => {
  return (
    <IconButton
      colorScheme={"teal"}
      icon={<FaShoppingBasket />}
      // bg={"transparent"}
      fontSize={"1.5rem"}
    />
  );
};

export default CartIcon;
