import {
  Box,
  Button,
  Icon,
  Image,
  Input,
  HStack,
  Text,
  useNumberInput,
} from "@chakra-ui/react";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { LiaShoppingBagSolid, LiaTrashAltSolid } from "react-icons/lia";
import { formatCurrency } from "../utils/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  altText: string;
};

export function StoreItem({
  id,
  name,
  price,
  imgUrl,
  altText,
}: StoreItemProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 99,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const itemQuantity = getItemQuantity(id);
  //console.log(input.value);
  return (
    <Box height="100%" width="100%">
      <Box height="0" paddingTop="100%" position="relative">
        <Image
          src={imgUrl}
          alt={altText}
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text flex="1 0 auto" fontSize="lg" fontWeight="600">
          {name}
        </Text>
        <Box>
          {itemQuantity === 0 ? (
            <Button
              onClick={() => increaseItemQuantity(id)}
              backgroundColor="transparent"
              margin="0 -0.5rem 0 -0.5rem"
              padding="0"
              _hover={{ backgroundColor: "transparent" }}
            >
              <Icon as={LiaShoppingBagSolid} boxSize={6} />
            </Button>
          ) : (
            <Box
              display="flex"
              justifyContent={{ base: "center", md: "flex-end" }}
              gap=".625rem"
              marginLeft={{ base: "0", md: "-3.2em" }}
              zIndex="1"
              backgroundColor="#F2F0EB"
            >
              <HStack maxW="20rem" width="85%" display="flex" gap="0">
                <Button
                  {...inc}
                  onClick={() => increaseItemQuantity(id)}
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Icon as={HiOutlineChevronUp} boxShadow={2} />
                </Button>
                <Input
                  {...input}
                  value={itemQuantity}
                  onChange={() => increaseItemQuantity(id)}
                  textAlign="center"
                  border="none"
                  padding="0"
                  fontWeight="600"
                />
                <Button
                  {...dec}
                  onClick={() => decreaseItemQuantity(id)}
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Icon as={HiOutlineChevronDown} />
                </Button>
                <Button
                  onClick={() => removeItemFromCart(id)}
                  margin="0 -0.5rem 0 -0.5rem"
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Icon as={LiaTrashAltSolid} boxSize={6} />
                </Button>
              </HStack>
            </Box>
          )}
        </Box>
      </Box>
      <Text
        fontSize=".875rem"
        fontWeight="600"
        textAlign={{ base: "center", md: "left" }}
      >
        {formatCurrency(price)}
      </Text>
    </Box>
  );
}
