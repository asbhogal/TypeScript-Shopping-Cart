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
    <>
      <Box height="80px">
        <Image src={imgUrl} alt={altText} objectFit="cover" />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text fontSize="lg">{name}</Text>
          <Text>{formatCurrency(price)}</Text>
        </Box>
      </Box>
    </>
  );
}
