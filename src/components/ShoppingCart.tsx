import {
  Box,
  Button,
  Icon,
  Slide,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type ShoppingCartProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const { cartItems } = useShoppingCart();
  return (
    <Slide direction="right" in={isOpen}>
      <Box
        display="flex"
        flexDirection="column"
        backgroundColor="red"
        width="18.75rem"
        position="absolute"
        right="0"
        top="0"
        height="100vh"
        background="#F2F0EB"
        zIndex="5"
        padding=".625rem"
        borderLeft=".0625rem solid #111111"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="lg">Cart</Text>
          <Button
            onClick={onClose}
            backgroundColor="transparent"
            padding="0"
            _hover={{ backgroundColor: "transparent" }}
          >
            <Icon as={RxCross2} boxSize={6} />
          </Button>
        </Box>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item}></CartItem>
          ))}
        </VStack>
      </Box>
    </Slide>
  );
}
