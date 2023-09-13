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
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/products.json";

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
        justifyContent="space-between"
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
        <Box display="flex" flexDirection="column" gap="3.125rem">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="lg">Cart</Text>
            <Button
              onClick={onClose}
              backgroundColor="transparent"
              margin="0 -.5rem 0 -.5rem"
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
        <Box
          display="flex"
          justifyContent="space-between"
          borderTop=".0625rem solid #111111"
          padding=".9375rem 0"
        >
          <Text fontWeight="500" fontSize="lg">
            Total
          </Text>
          <Text fontWeight="500" fontSize="lg">
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.input;
              }, 0)
            )}
          </Text>
        </Box>
      </Box>
    </Slide>
  );
}
