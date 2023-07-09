import {
  Box,
  Button,
  Icon,
  Image,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/products.json";
import { formatCurrency } from "../utils/formatCurrency";
import { LiaTrashAltSolid } from "react-icons/lia";

type CartItemProps = {
  id: number;
  input: number;
};

export function CartItem({ id, input }: CartItemProps) {
  const { removeItemFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <VStack
      divider={<StackDivider borderColor="gray.200" />}
      spacing={4}
      align="stretch"
    >
      <Box display="flex" justifyContent="space-between" height="5rem">
        <Image
          src={item.imgUrl}
          alt={item.altText}
          boxSize="5rem"
          objectFit="cover"
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          textAlign="right"
        >
          <Text>{item.name}</Text>
          <Text fontSize=".75rem" color="gray.500">
            Quantity: {input}
          </Text>
          <Text fontSize=".75rem" color="gray.500">
            {formatCurrency(item.price * input)}
          </Text>
          <Button
            onClick={() => removeItemFromCart(item.id)}
            margin="0 -.5rem 0 -.5rem"
            padding="0"
            backgroundColor="transparent"
            _hover={{ backgroundColor: "transparent" }}
          >
            <Icon as={LiaTrashAltSolid} boxSize={6} color="gray.500" />
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
