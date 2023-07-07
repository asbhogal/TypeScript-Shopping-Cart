import { Box, Image, Text } from "@chakra-ui/react";
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
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Text fontSize="lg">{name}</Text>
        <Text>{formatCurrency(price)}</Text>
      </Box>
    </Box>
  );
}
