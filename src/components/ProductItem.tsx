import { Box, Image, Text } from "@chakra-ui/react";

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
          <Text>{price}</Text>
        </Box>
      </Box>
    </>
  );
}
