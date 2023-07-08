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

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  altText: string;
};

export function ProductItem({
  id,
  name,
  price,
  imgUrl,
  altText,
}: ProductItemProps) {
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
        <Text fontSize="lg">{name}</Text>
        <Box>
          {input.value === 1 ? (
            <Button backgroundColor="transparent" padding="0">
              <Icon as={LiaShoppingBagSolid} boxSize={8} />
            </Button>
          ) : (
            <Box display="flex" justifyContent="flex-end" gap="10px">
              <HStack maxW="320px" width="75%" display="flex" gap="0">
                <Button
                  {...inc}
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Icon as={HiOutlineChevronUp} boxShadow={2} />
                </Button>
                <Input
                  {...input}
                  textAlign="center"
                  border="none"
                  padding="0"
                />
                <Button
                  {...dec}
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Icon as={HiOutlineChevronDown} boxShadow={2} />
                </Button>
                <Button
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{ backgroundColor: "transparent" }}
                >
                  <Icon as={LiaTrashAltSolid} boxShadow={2} />
                </Button>
              </HStack>
            </Box>
          )}
        </Box>
      </Box>
      <Text fontSize="14px">{formatCurrency(price)}</Text>
    </Box>
  );
}
